import { FaGithubSquare } from "react-icons/fa";

import EnvHubImage from "@/public/envhub.png";
import { ProductCard } from "@/app/component/products/ProductCard";
import { ProductsHeader } from "@/app/component/products/ProductsHeader";
import { DetailImageIcon } from "@/app/component/products/DetailImageIcon";
import DetailReactIcon from "@/app/component/products/DetailReactIcon";
import QiitaIcon from "@/public/qiita-icon.png";

export default function Products() {
    return (
        <>
        <div className="mt-52"></div>

        <div className="mx-auto max-w-3xl">            
            <ProductsHeader />
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

            </div>
        </div>
        </>
    )
}