// types.ts
export interface Template {
    _id?: string;
    user_id?: {
        name?: string;
        _id?: string;
    };
    template_name: string;
    main_image: string;
    stacks: string[];
    template_url: string;
    description: string;
    status:string;
    images: string[];
    createdAt?: string | undefined
    updatedAt?: string | undefined
}


export interface UserInfo {
    _id?: string;
    name?: string;
    email?: string;
}