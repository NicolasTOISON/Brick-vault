import { UUID } from "crypto";

export type LegoSet = {
    setID: number;
    name: string;
    figurines: number;
    pieces: number;   
    recommended_price: number;
    dimensions: Dimensions;
    box_picture: string;
    purchase_date: Date;
    creation_date: Date;
    buy_price: number;
    tag: Label;
}

export type Vault = {
    sets: LegoSet[];
    name: string;
    id: UUID;
}

export type User = {
    id: UUID;
    first_name: string;
    last_name: string;
    email: string;
}

export type Label = {
    id: number;
    name: string;
}

export type Dimensions = {
    height: number;
    width: number;
    depth: number;
}