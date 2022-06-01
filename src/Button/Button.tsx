import React from "react";
import { IButton } from "./Button.types";

export const Button = ({label}: IButton) => (
    <button>{label}</button>
);