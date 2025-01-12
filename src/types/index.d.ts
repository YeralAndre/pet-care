import mongo from "mongoose";

declare global {
  // eslint-disable-next-line
  var mongoose: {
    promise: Promise<typeof mongo> | null;
    conn: typeof mongo | null;
  };
}
