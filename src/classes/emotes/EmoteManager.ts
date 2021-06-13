import fetch from "node-fetch";
import type { Client, EmoteData } from "../..";
import { Manager } from "../../base/internal";
import { BASE_URL, HTTPError, InternalError, MILLISECONDS, TwitchAPIError } from "../../shared/";
import Emote from "./Emote";

export default class EmoteManager extends Manager<Emote> {
    public constructor(public readonly client: Client) {
        super(client, {
            update:
                typeof client.options.update.emotes === "boolean"
                    ? client.options.update.emotes
                        ? MILLISECONDS.HOUR
                        : MILLISECONDS.NEVER
                    : client.options.update.emotes ?? MILLISECONDS.HOUR,
            ttl:
                typeof client.options.ttl.emotes === "boolean"
                    ? client.options.ttl.emotes
                        ? MILLISECONDS.DAY
                        : MILLISECONDS.NEVER
                    : client.options.ttl.emotes ?? MILLISECONDS.DAY,
        });
    }

    public get(id: string) {
        return this.cache.get(id);
    }

    public async fetch(id: string) {
        if (!this.client.token) throw new InternalError("token not available");

        const response = await fetch(`${BASE_URL}/chat/emotes/global`, {
            headers: {
                Authorization: `Bearer ${this.client.token}`,
                "Client-Id": this.client.options.clientId,
            },
        }).catch((e) => {
            throw new HTTPError(e);
        });

        if (response.ok) {
            const current = new Emote(
                this.client,
                (await response.json()).data.find((e: EmoteData) => e.id === id)
            );

            this.cache.set(current.name, current);

            return current;
        }

        if (!this.client.options.suppressRejections) throw new TwitchAPIError("unable to fetch emotes");

        return;
    }
}
