export interface Burger {
    id: number;
    image: string[];
    title: string;
    description: string;
    values: {
        single: number;
        combo: number;
    };
}

export interface LoadBurgers {
    loadAll(): Promise<Burger[]>;
}
