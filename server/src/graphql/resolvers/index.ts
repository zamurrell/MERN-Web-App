import merge from "lodash.merge";

import { userResolvers } from "./User";
import { viewerResolvers } from "./Viewer";
import { listingResolvers } from "./Listing";
import { bookingResolvers } from "./Booking";

export const resolvers = merge(
  userResolvers,
  viewerResolvers,
  listingResolvers,
  bookingResolvers
);
