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
import TechEventBoardImage from "@/public/tech_event_board.png";
import EPlusPlusImage from "@/public/e-plus-plus.png";
import ECardImage from "@/public/ecard.jpg";
import NoImage from "@/public/noimage.jpg";

export default function Products() {
    return (
        <>
        <ProductsHeader />

        <div className="mx-auto max-w-3xl mt-10 mb-20">            
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
                    overViewStrArray={["フロントエンドをテンプレートエンジンのpugで実装し、バックエンドをExpressで実装しています。", "チーム開発で、私はバックエンドを担当しました。"]}
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

                <ProductCard
                    imageData={TechEventBoardImage}
                    altStr="技術イベント等のサムネイル画像" 
                    title="ECC Community"
                    overViewDescription="チーム開発"
                    overViewStrArray={["フロントエンドをテンプレートエンジンのbladeで実装し、バックエンドをLaravelで実装しています。", "チーム開発で、私はバックエンドを担当しました。"]}
                    mainTechStrArray={["Laravel"]}
                    subTechStrArray={["php", "blade"]}
                >
                    <DetailReactIcon url="https://github.com/my-teamE/team_development" Icon={FaGithubSquare} />
                </ProductCard>

                <ProductCard
                    imageData={EPlusPlusImage}
                    altStr="E++のサムネイル画像" 
                    title="E++"
                    overViewDescription="チーム開発"
                    overViewStrArray={["フロンドエンドをNext.jsで実装し、バックエンドをExpressで実装しています。", "チーム開発で、私はバックエンドのCRUD用API開発とバックエンドのフロントエンドの接続を担当しました。"]}
                    mainTechStrArray={["Next.js(App Router)", "Express", "Prisma"]}
                    subTechStrArray={["TypeScript", "express-validator", "jsonwebtoken", "nodemailer", "papaparse", "ts-node-dev"]}
                >
                    <DetailReactIcon url="https://github.com/my-teamE/team_development" Icon={FaGithubSquare} />
                </ProductCard>

                <ProductCard
                    imageData={ECardImage}
                    altStr="ECardのサムネイル画像" 
                    title="ECard"
                    overViewDescription="個人開発"
                    overViewStrArray={["1年生のAndroid開発の授業の最終課題であるアウトプット作品です。"]}
                    mainTechStrArray={["Java"]}
                >
                    <DetailReactIcon url="https://github.com/warabimochi1126/ECard" Icon={FaGithubSquare} />
                </ProductCard>

                <ProductCard
                    imageData={NoImage}
                    altStr="kotlin-todoのサムネイル画像" 
                    title="kotlin-todo"
                    overViewDescription="niconico"
                    overViewStrArray={["kotlinで作成したtodoアプリです。", "N予備校のハンズオンです。"]}
                    mainTechStrArray={["kotlin", "Jetpack Compose"]}
                >
                    <DetailReactIcon url="https://github.com/warabimochi1126/kotlin-todo" Icon={FaGithubSquare} />
                </ProductCard>

                <ProductCard
                    imageData={NoImage}
                    altStr="simple-image-downloaderのサムネイル画像" 
                    title="画像ダウンロードアプリ"
                    overViewDescription="Udemy"
                    overViewStrArray={["Electronで作成したURLを指定するだけで画像を描画・保存出来るデスクトップアプリケーションです。", "Udemy講座のハンズオンです。"]}
                    mainTechStrArray={["Electron", "playwright", "image-downloader"]}
                >
                    <DetailReactIcon url="https://github.com/warabimochi1126/simple-image-downloader" Icon={FaGithubSquare} />
                </ProductCard>


            </div>
        </div>
        </>
    )
}