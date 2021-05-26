import { SubscriptionType } from 'shared/enums';

export interface IChangeSubscriptionInDto {
	subscriptionType: SubscriptionType;
	purchasedDevices: number;
	clientId: string;
	devicesIds: string[];
}

export interface IGetSubscriptionPricingInDto {
	subscriptionType: SubscriptionType;
	purchasedDevices: number;
	clientId: string;
}

export interface IGetSuscriptionPricingOutDto {
	oldPrice: number;
	newPrice: number;
	additionalPayment: number;
	currency: string;
}
