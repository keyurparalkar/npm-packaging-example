import React from "react";
import { IText } from "./Text.types";

export const Text = ({children}: IText) => (
    <span>{children}</span>
);