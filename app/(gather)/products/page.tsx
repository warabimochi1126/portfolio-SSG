import { FaGithubSquare } from "react-icons/fa";
import { SiUdemy } from "react-icons/si";

import { ProductCard } from "@/app/component/products/ProductCard";
import { ProductsHeaderStr } from "@/app/component/products/ProductsHeaderStr";
import { DetailImageIcon } from "@/app/component/products/DetailImageIcon";
import { ProductsHeader } from "@/app/component/products/ProductsHeader";
import DetailReactIcon from "@/app/component/products/DetailReactIcon";
import QiitaIcon from "@/public/qiita-icon.png";
import EnvHubImage from "@/public/envhub.png";
import BookCommerceImage from "@/public/book_commerce.png";
import SnsCloneImage from "@/public/sns-clone.png";
import DisasterMessageBoardImage from "@/public/disaster_message_board.png";
import BookShelfImage from "@/public/book_shelf.png";

export default function Products() {
    return (
        <>
        <ProductsHeader />

        <div className="mx-auto max-w-3xl mt-10">            
            <ProductsHeaderStr />
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">

                <ProductCard 
                    imageData={EnvHubImage} 
                    altStr="EnvHubのサムネイル画像" 
                    title="EnvHub" 
                    overViewDescription="個人開発" 
                    deployUrl="https://env-hub-hazel.vercel.app/"
                    overViewStrArray={[".envをGitHubリポジトリに結び付けて共有・保存できるWebアプリケーションです。","個人開発です。"]}
                    mainTechStrArray={["Next.js(App Router)", "Supabase"]}
                    subTechStrArray={["TypeScript", "TailwindCSS"]}
                >
                    <DetailImageIcon url="https://qiita.com/warabimochi_26/items/0c86ea1e6dfb84fb1c4a" icon={QiitaIcon}/>
                    <DetailReactIcon url="https://github.com/warabimochi1126/EnvHub" Icon={FaGithubSquare} />
                </ProductCard>

                <ProductCard
                    imageData={BookCommerceImage}
                    altStr="書籍販売Webアプリのサムネイル画像" 
                    title="BookCommerce"
                    overViewDescription="Udemy" 
                    deployUrl="https://book-commerce-app-ecru-ten.vercel.app/"
                    overViewStrArray={["書籍販売Webアプリです。","Udemy講座のハンズオンです。"]}
                    mainTechStrArray={["Next.js(App Router)", "microCMS", "Stripe", "prisma"]}
                    subTechStrArray={["TypeScript", "Vercel Postgres"]}
                >
                    <DetailReactIcon url="https://github.com/warabimochi1126/book-commerce-app/" Icon={FaGithubSquare} />
                    <DetailReactIcon url="https://www.udemy.com/course/book-commerce-web-dev-with-nextjs/" Icon={SiUdemy} color="#A435F0" />
                </ProductCard>

                <ProductCard
                    imageData={SnsCloneImage}
                    altStr="SNSクローンWebアプリのサムネイル画像" 
                    title="SNS clone"
                    overViewDescription="Udemy"
                    overViewStrArray={["フロントエンドをNext.jsで実装し、バックエンドをExpressで実装しています。","Udemy講座のハンズオンです。"]}
                    mainTechStrArray={["Next.js(Page Router)", "Express", "prisma"]}
                    subTechStrArray={["TypeScript", "jsonwebtoken", "bcrypt", "cors", "identicon.js"]}
                >
                    <DetailReactIcon url="https://github.com/warabimochi1126/sns-client" Icon={FaGithubSquare} />
                    <DetailReactIcon url="https://github.com/warabimochi1126/sns-api" Icon={FaGithubSquare} />
                    <DetailReactIcon url="https://www.udemy.com/course/fullstack-sns-development/" Icon={SiUdemy} color="#A435F0" />
                </ProductCard>

                <ProductCard
                    imageData={DisasterMessageBoardImage}
                    altStr="災害時伝言掲示板のサムネイル画像" 
                    title="災害時伝言掲示板"
                    overViewDescription="チーム開発"
                    deployUrl="https://team-development-1.onrender.com/"
                    overViewStrArray={["フロントエンドをpugで実装し、バックエンドをExpressで実装しています。","チーム開発です。"]}
                    mainTechStrArray={["Express", "pug", "MongoDB"]}
                    subTechStrArray={["JavaScript", "mongoose"]}
                >
                    <DetailReactIcon url="https://github.com/warabimochi1126/team-development-1" Icon={FaGithubSquare} />
                </ProductCard>

                <ProductCard
                    imageData={BookShelfImage}
                    altStr="本棚Ｗebアプリのサムネイル画像" 
                    title="Book Shelf"
                    overViewDescription="Udemy"
                    overViewStrArray={["フロントエンドをReactで実装し、バックエンドをExpressで実装しています。","Express側のみ実装しました。", "Udemy講座のハンズオンです。"]}
                    mainTechStrArray={["React", "Express", "MongoDB"]}
                    subTechStrArray={["JavaScript", "cors", "express-validator"]}
                >
                    <DetailReactIcon url="https://github.com/warabimochi1126/bookshelf" Icon={FaGithubSquare} />
                    <DetailReactIcon url="https://www.udemy.com/course/nodejs-comp-guide/" Icon={SiUdemy} color="#A435F0" />
                </ProductCard>


            </div>
        </div>
        </>
    )
}