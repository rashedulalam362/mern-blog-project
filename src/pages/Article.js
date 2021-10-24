
import { useParams } from 'react-router'
import Articles from '../components/Articles';
import articleContent from './article-content'
function Article() {
   const {name}=useParams()
   console.log(name);
    const article = articleContent.find(article => article.name   === name); 
    const otherArticles = articleContent.filter(
      (article) => article.name !== name
    );
    return (
        <div className="mb-2">
         <h1 className="text-3xl font-bold mt-6 mb-6 text-gray-500 text-center">
         {article.title}
        </h1> 
          {
           article.content.map((para,index) =>(
            <p>{para} key= {index}</p>   
          ))   
          }  
          <h1 className="sm:text-4xl text-2xl font-bold mt-6 text-gray-900">Other articles</h1>  
          <div className="flex flex-wrap m-4 ">
            <Articles articles={otherArticles} />
            </div> 
          
        </div>
    )
}

export default Article
