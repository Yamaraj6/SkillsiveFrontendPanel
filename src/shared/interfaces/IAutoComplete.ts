export interface IAutoCompleteValue {
	label: string;
	value: number;
}

export interface IAutoCompleteRequestBase {
	Skip?: number;
	Take?: number;
	Phrase: string;
}
