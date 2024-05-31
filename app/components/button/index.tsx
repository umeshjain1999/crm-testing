import styled, { css } from "styled-components";
import React from "react";

interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  secondary?: boolean | undefined;
  onClick?: () => void;
  big?: boolean | undefined;
  inverse?: boolean | undefined;
}

const defaultProps: Partial<ButtonProps> = {
  secondary: false,
  big: false,
  inverse: false,
};
const ButtonStyle = styled.button<ButtonProps>`
	border-radius: 5px;
	background-color: ${(props) => (props.secondary ? '#fdba74' : '#f97316')};
	color: #fff;
	padding: 10px 15px;
	font-size: ${(props) => {
		if (props.big) return '20px';
		return '16px';
	}};
	outline: none;
	border: none;
	cursor: pointer;
	margin: 15px;
	border: 2px solid ${(props) => (props.secondary ? '#fdba74' : '#f97316')};
  transition: opacity 0.25s;
	&:hover {
		opacity: 0.9;
	}

	${(props) => {
		return (
			props.inverse &&
			css`
				background-color: #fff;
				color: #f97316;
			`
		);
	}}
`;

const SpecialButtonStyle = styled(ButtonStyle)`
	border: 2px solid #65a30d;
	background-color: #a3e635;
	color: #3f6212;
	font-weight: 600;
`

ButtonStyle.defaultProps = defaultProps;

export default function Button(props: ButtonProps) {
  return <ButtonStyle {...props} />;
}

export function SpecialButton(props: ButtonProps) {
  return <SpecialButtonStyle {...props} />;
}