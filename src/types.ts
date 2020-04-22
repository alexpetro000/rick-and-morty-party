export type TCharacter = {
    id: string | number;
    name: string;
    image: string;
}

export type TCharactersQueryData = {
    characters: {
        info: {
            count: number;
            pages: number;
            next: number;
        };
        results: TCharacter[];
    } | null;
}

export type TPartyMember = {
    name: string;
    tag: string;
    character?: TCharacter;
}

export type TParty = TPartyMember[]
