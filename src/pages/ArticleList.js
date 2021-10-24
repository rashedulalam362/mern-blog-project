import React from 'react'

import Articles from '../components/Articles'
import articleContent from './article-content'
function ArticleList() {
    return (
        <>
         <h1 className="text-3xl font-bold mt-6 mb-6 text-gray-500 text-center">ArticleList</h1>   
         <div className="container py-4 mx-auto">
          <div className="flex flex-wrap m-4">
           <Articles articles={articleContent}/>
          </div>
         </div>
       
       
        </>
    )
}

export default ArticleList
