// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: sGHXXiFJtxEudrKmGY7eVc
// Component: -Q9PBtQ752jP
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
import ButtonBase from '../../ButtonBase'; // plasmic-import: dynsQ2nrxe/component
import Input from '../../Input'; // plasmic-import: EI2IZZAvPf/component

import { useScreenVariants } from './PlasmicGlobalVariant__Screen'; // plasmic-import: mxXjSAVsL22J/globalVariant

import '@plasmicapp/react-web/lib/plasmic.css';
import * as defaultcss from '../plasmic__default_style.module.css'; // plasmic-import: global/defaultcss
import * as projectcss from './plasmic_blank_project_mobile_first.module.css'; // plasmic-import: sGHXXiFJtxEudrKmGY7eVc/projectcss
import * as sty from './PlasmicHomepage.module.css'; // plasmic-import: -Q9PBtQ752jP/css

export type PlasmicHomepage__VariantMembers = {};

export type PlasmicHomepage__VariantsArgs = {};
type VariantPropType = keyof PlasmicHomepage__VariantsArgs;
export const PlasmicHomepage__VariantProps = new Array<VariantPropType>();

export type PlasmicHomepage__ArgsType = {};
type ArgPropType = keyof PlasmicHomepage__ArgsType;
export const PlasmicHomepage__ArgProps = new Array<ArgPropType>();

export type PlasmicHomepage__OverridesType = {
	root?: p.Flex<'div'>;
	box?: p.Flex<'div'>;
	title?: p.Flex<'div'>;
	title2?: p.Flex<'div'>;
	buttonBase?: p.Flex<typeof ButtonBase>;
	container?: p.Flex<'div'>;
	input?: p.Flex<typeof Input>;
};

export interface DefaultHomepageProps {
	dataFetches: PlasmicHomepage__Fetches;
}

function PlasmicHomepage__RenderFunc(props: {
	variants: PlasmicHomepage__VariantsArgs;
	args: PlasmicHomepage__ArgsType;
	overrides: PlasmicHomepage__OverridesType;
	dataFetches?: PlasmicHomepage__Fetches;
	forNode?: string;
}) {
	const { variants, args, overrides, forNode, dataFetches } = props;

	const globalVariants = ensureGlobalVariants({
		screen: useScreenVariants()
	});

	return (
		<React.Fragment>
			<Head>
				<title key='title'>{''}</title>
				<meta key='og:title' property='og:title' content={''} />
				<meta key='description' name='description' property='og:description' content={''} />
			</Head>

			<style global jsx>{`
				body {
					margin: 0;
				}
			`}</style>

			<div className={defaultcss.plasmic_page_wrapper}>
				<div
					data-plasmic-name={'root'}
					data-plasmic-override={overrides.root}
					data-plasmic-root={true}
					data-plasmic-for-node={forNode}
					className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
				>
					<div data-plasmic-name={'box'} data-plasmic-override={overrides.box} className={classNames(defaultcss.all, sty.box)}>
						<div
							data-plasmic-name={'title'}
							data-plasmic-override={overrides.title}
							className={classNames(defaultcss.all, defaultcss.__wab_text, sty.title)}
						>
							{hasVariant(globalVariants, 'screen', 'desktopOnly') ? 'Add User' : 'Add User'}
						</div>

						{false ? (
							<div
								data-plasmic-name={'title2'}
								data-plasmic-override={overrides.title2}
								className={classNames(defaultcss.all, defaultcss.__wab_text, sty.title2)}
							>
								{hasVariant(globalVariants, 'screen', 'desktopOnly') ? 'Add User' : 'Panel / Add User'}
							</div>
						) : null}
					</div>

					{true ? (
						<ButtonBase
							data-plasmic-name={'buttonBase'}
							data-plasmic-override={overrides.buttonBase}
							className={classNames('__wab_instance', sty.buttonBase)}
						/>
					) : null}
					{true ? (
						<div
							data-plasmic-name={'container'}
							data-plasmic-override={overrides.container}
							className={classNames(defaultcss.all, sty.container)}
						>
							<Input
								data-plasmic-name={'input'}
								data-plasmic-override={overrides.input}
								className={classNames('__wab_instance', sty.input)}
							/>
						</div>
					) : null}
				</div>
			</div>
		</React.Fragment>
	) as React.ReactElement | null;
}

const PlasmicDescendants = {
	root: ['root', 'box', 'title', 'title2', 'buttonBase', 'container', 'input'],
	box: ['box', 'title', 'title2'],
	title: ['title'],
	title2: ['title2'],
	buttonBase: ['buttonBase'],
	container: ['container', 'input'],
	input: ['input']
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> = typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
	root: 'div';
	box: 'div';
	title: 'div';
	title2: 'div';
	buttonBase: typeof ButtonBase;
	container: 'div';
	input: typeof Input;
};

type ReservedPropsType = 'variants' | 'args' | 'overrides';
type NodeOverridesType<T extends NodeNameType> = Pick<PlasmicHomepage__OverridesType, DescendantsType<T>>;
type NodeComponentProps<T extends NodeNameType> = { // Explicitly specify variants, args, and overrides as objects
	variants?: PlasmicHomepage__VariantsArgs;
	args?: PlasmicHomepage__ArgsType;
	overrides?: NodeOverridesType<T>;
	dataFetches?: PlasmicHomepage__Fetches;
} & Omit<PlasmicHomepage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
	// Specify args directly as props
	Omit<PlasmicHomepage__ArgsType, ReservedPropsType> &
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
			internalArgPropNames: PlasmicHomepage__ArgProps,
			internalVariantPropNames: PlasmicHomepage__VariantProps
		});

		const { dataFetches } = props;

		return PlasmicHomepage__RenderFunc({
			variants,
			args,
			overrides,
			dataFetches,
			forNode: nodeName
		});
	};
	if (nodeName === 'root') {
		func.displayName = 'PlasmicHomepage';
	} else {
		func.displayName = `PlasmicHomepage.${nodeName}`;
	}
	return func;
}

export const PlasmicHomepage = Object.assign(
	// Top-level PlasmicHomepage renders the root element
	makeNodeComponent('root'),
	{
		// Helper components rendering sub-elements
		box: makeNodeComponent('box'),
		title: makeNodeComponent('title'),
		title2: makeNodeComponent('title2'),
		buttonBase: makeNodeComponent('buttonBase'),
		container: makeNodeComponent('container'),
		input: makeNodeComponent('input'),

		// Metadata about props expected for PlasmicHomepage
		internalVariantProps: PlasmicHomepage__VariantProps,
		internalArgProps: PlasmicHomepage__ArgProps
	}
);

export default PlasmicHomepage;
/* prettier-ignore-end */
