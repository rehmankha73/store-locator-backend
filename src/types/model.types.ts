export type ProfileType = {
  name: string;
  email: string;
  images?: string[];
  profilePicture?: string;
  aboutMe?: string;
  interests?: InterestType[];
  gender?: GenderType;
  location?: LocationType;
  isDisabled?: boolean;
  role: UserRoleType;
  uid: string;
};

export type SocialMediaType = {
  name: string;
  imageUrl?: string[];
  url?: string;
};

export type UserRoleType = "ADMIN" | "USER";
export type GenderType = "MALE" | "FEMALE" | "OTHER";

export type InterestType = {
  name: string;
  id: string;
  icon: string;
};

export type LocationType = {
  latitude: number;
  longitude: number;
  address: string;
  city: string;
  postCode: string;
  country: string;
};

export type FavoriteFriendType = {
    userId: string;
    isFavorite: boolean;
};
