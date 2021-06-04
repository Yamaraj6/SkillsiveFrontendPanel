// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: sGHXXiFJtxEudrKmGY7eVc
// Component: EI2IZZAvPf
import * as React from 'react';

import Head from 'next/head';
import Link, { LinkProps } from 'next/link';

import * as p from '@plasmicapp/react-web';
import {
	hasVariant,
	classNames,
	wrapWithClassName,
	createPlasmicElementProxy,
	makeFragment,
	MultiChoiceArg,
	SingleBooleanChoiceArg,
	SingleChoiceArg,
	pick,
	omit,
	useTrigger,
	StrictProps,
	deriveRenderOpts,
	ensureGlobalVariants
} from '@plasmicapp/react-web';

import '@plasmicapp/react-web/lib/plasmic.css';
import * as defaultcss from '../plasmic__default_style.module.css'; // plasmic-import: global/defaultcss
import * as projectcss from './plasmic_skillsive_sandbox.module.css'; // plasmic-import: sGHXXiFJtxEudrKmGY7eVc/projectcss
import * as sty from './PlasmicInputP.module.css'; // plasmic-import: EI2IZZAvPf/css

export type PlasmicInputP__VariantMembers = {
	number: 'number';
};

export type PlasmicInputP__VariantsArgs = {
	number?: SingleBooleanChoiceArg<'number'>;
};

type VariantPropType = keyof PlasmicInputP__VariantsArgs;
export const PlasmicInputP__VariantProps = new Array<VariantPropType>('number');

export type PlasmicInputP__ArgsType = {};
type ArgPropType = keyof PlasmicInputP__ArgsType;
export const PlasmicInputP__ArgProps = new Array<ArgPropType>();

export type PlasmicInputP__OverridesType = {
	root?: p.Flex<'input'>;
};

export interface DefaultInputPProps {
	number?: SingleBooleanChoiceArg<'number'>;
	className?: string;
}

function PlasmicInputP__RenderFunc(props: {
	variants: PlasmicInputP__VariantsArgs;
	args: PlasmicInputP__ArgsType;
	overrides: PlasmicInputP__OverridesType;
	dataFetches?: PlasmicInputP__Fetches;
	forNode?: string;
}) {
	const { variants, args, overrides, forNode, dataFetches } = props;

	return (
		<input
			data-plasmic-name={'root'}
			data-plasmic-override={overrides.root}
			data-plasmic-root={true}
			data-plasmic-for-node={forNode}
			className={classNames(defaultcss.input, projectcss.root_reset, sty.root, {
				[sty.root__number]: hasVariant(variants, 'number', 'number')
			})}
			placeholder={'Please enter' as const}
			size={1 as const}
			type={'text' as const}
			value={hasVariant(variants, 'number', 'number') ? ('1' as const) : ('' as const)}
		/>
	) as React.ReactElement | null;
}

const PlasmicDescendants = {
	root: ['root']
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> = typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
	root: 'input';
};

type ReservedPropsType = 'variants' | 'args' | 'overrides';
type NodeOverridesType<T extends NodeNameType> = Pick<PlasmicInputP__OverridesType, DescendantsType<T>>;
type NodeComponentProps<T extends NodeNameType> = { // Explicitly specify variants, args, and overrides as objects
	variants?: PlasmicInputP__VariantsArgs;
	args?: PlasmicInputP__ArgsType;
	overrides?: NodeOverridesType<T>;
	dataFetches?: PlasmicInputP__Fetches;
} & Omit<PlasmicInputP__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
	// Specify args directly as props
	Omit<PlasmicInputP__ArgsType, ReservedPropsType> &
	// Specify overrides for each element directly as props
	Omit<NodeOverridesType<T>, ReservedPropsType | VariantPropType | ArgPropType> &
	// Specify props for the root element
	Omit<Partial<React.ComponentProps<NodeDefaultElementType[T]>>, ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>>;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
	type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
	const func = function <T extends PropsType>(props: T & StrictProps<T, PropsType>) {
		const { variants, args, overrides } = deriveRenderOpts(props, {
			name: nodeName,
			descendantNames: [...PlasmicDescendants[nodeName]],
			internalArgPropNames: PlasmicInputP__ArgProps,
			internalVariantPropNames: PlasmicInputP__VariantProps
		});

		const { dataFetches } = props;

		return PlasmicInputP__RenderFunc({
			variants,
			args,
			overrides,
			dataFetches,
			forNode: nodeName
		});
	};
	if (nodeName === 'root') {
		func.displayName = 'PlasmicInputP';
	} else {
		func.displayName = `PlasmicInputP.${nodeName}`;
	}
	return func;
}

export const PlasmicInputP = Object.assign(
	// Top-level PlasmicInputP renders the root element
	makeNodeComponent('root'),
	{
		// Helper components rendering sub-elements

		// Metadata about props expected for PlasmicInputP
		internalVariantProps: PlasmicInputP__VariantProps,
		internalArgProps: PlasmicInputP__ArgProps
	}
);

export default PlasmicInputP;
/* prettier-ignore-end */
