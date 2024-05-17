import Link from "next/link";
import Image from "next/image";
import { SiJavascript, SiTypescript, SiNextdotjs } from "react-icons/si";
import { FaReact, FaGithubSquare } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaSquareXTwitter } from "react-icons/fa6";

import { ExpressIcon } from "@/app/component/aboutme/ExpressIcon";
import QiitaIcon from "@/public/qiita-icon.png"
import { SectionHeader } from "@/app/component/aboutme/SectionHeader";

export default function AboutMe() {
  return (
    <div className="mx-auto w-7/12 my-10">
      <h1 className="font-bold text-5xl">私について</h1>

      <SectionHeader>希望職種</SectionHeader>
      <p>バックエンドエンジニア・セキュリティエンジニア</p>

      <SectionHeader>年齢</SectionHeader>
      <p>20歳 (26卒)</p>

      <SectionHeader>技術スタック</SectionHeader>
      <h3 className="font-bold mb-1">よく使います</h3>
      <div className="flex space-x-3">
        <SiJavascript color={"#E8D44D"} size="50"/>
        <SiTypescript color={"#2F74C0"} size="50"/>
        <ExpressIcon />
        <FaReact color="#61DBFB" size="50"/>
        <SiNextdotjs size="50"/>
        <RiTailwindCssFill color="#38BDF8" size="50"/>
      </div>

      <h3 className="font-bold mt-2 mb-2">授業で学習したことがあります</h3>
      <p>Java・・・(後で書く)</p>

      <SectionHeader>取得した資格</SectionHeader>
      <p>応用情報技術者 (2023/6)</p>
      <p>情報処理安全確保支援士 (2023/12)</p>

      <SectionHeader>各種リンク</SectionHeader>
      <div className="flex space-x-2">
        <Link href="https://github.com/warabimochi1126">
          <FaGithubSquare size="50"/>
        </Link>
        <Link href="https://qiita.com/warabimochi_26">
          <Image src={QiitaIcon} alt="Qiitaのアイコン" width="50"/>
        </Link>
        <Link href="https://twitter.com/ecccompsenyou">
          <FaSquareXTwitter size="50"/>
        </Link>
      </div>

      <SectionHeader>連絡先</SectionHeader>
      <p>ecccompsenyou@gmail.com</p>
    </div>
  )
}