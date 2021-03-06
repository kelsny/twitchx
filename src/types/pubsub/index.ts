export type PubSubTopic = string;

export type ClientPubSubEvent = "PING" | "LISTEN" | "UNLISTEN";

export type ServerPubSubEvent = "RECONNECT" | "PONG" | "RESPONSE" | "MESSAGE";

export type ClientPubSubResponse = {
    type: "PING";
};

export type ServerPubSubResponse =
    | {
          type: "PONG";
      }
    | {
          type: "RESPONSE";
          nonce?: string;
          error: "ERR_BADMESSAGE" | "ERR_BADAUTH" | "ERR_SERVER" | "ERR_BADTOPIC" | "";
      }
    | {
          type: "MESSAGE";
          data: {
              topic: PubSubTopic;
              message: string | object;
          };
      };

export interface PubSubOptions {
    /**
     * Suppresses any rejections coming from the PubSub instance.
     */
    suppressRejections?: boolean;
    /**
     * Options for the websocket.
     */
    ws?: import("ws").ClientOptions;
}

/**
 * Options for Twitch's PubSub feature.
 * @typedef {object} PubSubOptions
 * @prop {boolean | undefined} suppressRejections Suppresses any rejections coming from the PubSub instance.
 * @prop {WebSocketClientOptions | undefined} ws  Options for the websocket.
 */

/**
 * Options for the websocket.
 * @external WebSocketClientOptions
 * @see https://github.com/DefinitelyTyped/DefinitelyTyped/blob/69e29e847155bd4d845497319116281cb5a384a3/types/ws/index.d.ts#L171-L187
 */
