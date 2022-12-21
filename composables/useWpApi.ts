

/**
 * WordPress Composables
 * A collection of WordPress composable functions.
 */

import { Post } from "~~/types/Post.type";

export default async () => {
    const config = useRuntimeConfig();
    const WP_URL: string = config.public.wpurl;

    const get = async <T>(endpoint: string) => {
        return useFetch<T>(`${WP_URL}/wp-json/wp/v2/${endpoint}`);
    };

// design thinking post
    const getPosts = async (
        category?: number ,
        page: number = 1,
        perPgae: number = 20,
        fields: string = "author,id,excerpt,title,link,slug,date"
    ) => {
        let query: string = `posts?page=${page}&per_page=${perPgae}&_embed=1`;
        if (category) {
            query += `&categories=${category}`;
        }
        return get<Post[]>(query);
    };

// my projects posts
   const getMyProjectsPosts = async (
        category: number = 1,
        page: number = 1,
        perPgae: number = 20,
        fields: string = "author,id,excerpt,title,link,slug,date"
    ) => {
        let query: string = `posts?page=${page}&per_page=${perPgae}&_embed=1`;
        if (category) {
            query += `&categories=${category}`;
        }
        return get<Post[]>(query);
    };


    const getPost = async (slug: string) => {
        return get<Post>(`posts?slug=${slug}&_embed=1`);
    };

    const getCatgories = async (fields: string = "name,slug,count") => {
        return get<any>(`categories`);
    };

    const getCatgory = async (slug: string) => {
        return get<any>(`categories?slug=${slug}`);
    };

    return {
        get,
        getPosts,
        getPost,
        getCatgories,
        getCatgory,
    };
};






// export default () => {


//     const config = useRuntimeConfig();
//     const wpurl = config.public.wpurl;
//     //get
//     const get = async <T>(endpoint: string) => {
//         useFetch<T>(`${wpurl}/wp-json/wp/v2/${endpoint}`)
//     }


//     // Get All Posts 

//     const getposts = async <T>(
//         categories?: number,
//         page: number = 1,
//         perpage: number = 9


//     ) => {
//         let query = `post?_embed&per_page=${perpage}&page=${page}`;
//         if (categories) {
//             query += `&categories=${categories}`;

//         }
//         return get<T>(query);

//     };

//     // Get a Single Post

//     const getsinglepost = async (slug: string) => {
//         get(`posts?slug=${slug}&_embed`);
//     }

//     // Get All Categories
//     const getcategories = async () => get(`categories`);

//     // Get a Single Category
//     const getsinglecategory = async (slug: string) => {
//         get(`categories?slug=${slug}`);
//     }
//     return {
//         get,
//         getposts,
//         getsinglepost,
//         getcategories,
//         getsinglecategory,
//     }

// }