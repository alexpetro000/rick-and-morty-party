export type TCharacter = {
    id: string | number;
    name: string;
    image: string;
}

export type TCharactersQueryResult = {
    characters: {
        info: {
            count: number,
            pages: number,
            next: number
        },
        results: TCharacter[],
    }
}

export type TParty = {
    rick?: TCharacter,
    morty?: TCharacter,
}
