import { ICourse } from '../courses';

export enum DeviceModel {
	UNITY = 0, // UNKNOWN
	OCULUS_GO = 1,
	OCULUS_QUEST = 2,
	PICO_G2 = 10,
	PICO_NEO2 = 11
}

export interface IEditGoggleRequest {
	goggleId: string;
	type: DeviceModel;
	goggleName: string;
	color: Color;
}

export enum Color {
	NO_COLOR = 0, // #E5E4E2
	BLACK = 1, // #000000
	GREY = 2, // #808080
	SILVER = 3, // #C0C0C0
	WHITE = 4, // #FFFFFF
	BURGUNDY = 5, // #800000
	RED = 6, // #E21E13
	BROWN = 7, // #964B00
	ORANGE = 8, // #CC5D2B
	GOLD = 9, // #FFD700
	YELLOW = 10, // #F9E04B
	GREEN = 11, // #7CFC00
	DARK_GREEN = 12, // #326647
	SEA_BLUE = 13, // #30D5C8
	BLUE = 14, // #007FFF
	NAVY_BLUE = 15, // #19247C
	PURPLE = 16, // #660066
	PINK = 17 // #DBB0EF
}

export interface IGetAllClientsGogglesResponse {
	goggles: IDevice[];
}
export interface IDevice {
	id: string;
	goggleName: string;
	createDate: Date;
	color: Color;
	type: DeviceModel;
	status: GoggleStatus;
	activeCourse: ICourse;
	number: number;
	lastKnownPin: string;
	deviceUrl: string; // new
	subscription: Subscription; // new
	devicesCount: string; // new
}

export enum GoggleStatus {
	UNKNOWN = 0,
	ONLINE = 1,
	OFFLINE = 2
}

enum Subscription {
	FREE = 'Free',
	STANDARD = 'Standard',
	PREMIUM = 'Premium',
	ENTERPRISE = 'Enterprise'
}
