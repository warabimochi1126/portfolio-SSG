"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiNestjs,
  SiPhp,
  SiLaravel,
  SiGithubactions,
  SiMysql,
} from "react-icons/si";
import { FaReact, FaGithubSquare, FaDocker } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaSquareXTwitter, FaGolang } from "react-icons/fa6";

import { ExpressIcon } from "@/app/component/aboutme/ExpressIcon";
import QiitaIcon from "@/public/qiita-icon.png";
import JavaIcon from "@/public/java_icon.webp";
import KotlinIcon from "@/public/kotlin_icon.png";
import PythonIcon from "@/public/python_icon.svg";
import InternShipOGP from "@/public/internship_ogp.png";

import { SectionHeader } from "@/app/component/aboutme/SectionHeader";
import { FadeInOut } from "@/app/component/home/FadeInOut";
import { AboutMeHeader } from "@/app/component/aboutme/AboutmeHeader";

export default function AboutMe() {
  const [hoverSectionNum, setHoverSectionNum] = useState(0);

  return (
    <>
      <AboutMeHeader />
      <div className="mx-auto w-5/12 my-10">
        <h1 className="font-bold text-4xl">私について</h1>

        <div
          onMouseEnter={() => setHoverSectionNum(1)}
          onMouseLeave={() => setHoverSectionNum(0)}
        >
          <SectionHeader>
            希望職種{hoverSectionNum === 1 ? <FadeInOut /> : ""}
          </SectionHeader>
          <p>バックエンドエンジニア・セキュリティエンジニア</p>
        </div>

        <div
          onMouseEnter={() => setHoverSectionNum(2)}
          onMouseLeave={() => setHoverSectionNum(0)}
        >
          <SectionHeader>
            年齢{hoverSectionNum === 2 ? <FadeInOut /> : ""}
          </SectionHeader>
          <p>20歳 (26卒)</p>
        </div>

        <div
          onMouseEnter={() => setHoverSectionNum(3)}
          onMouseLeave={() => setHoverSectionNum(0)}
        >
          <SectionHeader>
            技術スタック{hoverSectionNum === 3 ? <FadeInOut /> : ""}
          </SectionHeader>
          <h3 className="font-bold mb-1">
            個人・チーム・インターンシップでの開発経験があります
          </h3>
          <div className="flex space-x-3">
            <SiJavascript color={"#E8D44D"} size="50" />
            <SiTypescript color={"#2F74C0"} size="50" />
            <ExpressIcon />
            <SiNestjs color="#D9214C" size="50" />
            <FaReact color="#61DBFB" size="50" />
            <SiNextdotjs size="50" />
            <RiTailwindCssFill color="#38BDF8" size="50" />
            <FaDocker color="#2395EC" size="50" />
            <SiGithubactions color="#2088FF" size="50" />
            <SiMysql color="#3E6E93" size="50" />
          </div>

          <h3 className="font-bold mt-2 mb-2">学習経験があります</h3>
          <div className="flex space-x-3">
            <Image src={JavaIcon} alt="Javaのアイコン" width="50" />
            <SiPhp color="#7377AD" size="50" />
            <SiLaravel color="#FF2D20" size="50" />
            <Image src={KotlinIcon} alt="kotlinのアイコン" width="50" />
            <FaGolang color="#29BDB1" size="50" />
            <Image src={PythonIcon} alt="Pythonのアイコン" width="50" />
          </div>
        </div>

        <div
          onMouseEnter={() => setHoverSectionNum(4)}
          onMouseLeave={() => setHoverSectionNum(0)}
        >
          <SectionHeader>
            取得した資格{hoverSectionNum === 4 ? <FadeInOut /> : ""}
          </SectionHeader>
          <p>応用情報技術者 (2023/6)</p>
          <p>情報処理安全確保支援士 (2023/12)</p>
          <p>Oracle Certified Java Programmer, Bronze SE (2023/5)</p>
        </div>

        <div
          onMouseEnter={() => setHoverSectionNum(5)}
          onMouseLeave={() => setHoverSectionNum(0)}
        >
          <SectionHeader>
            インターンシップ {hoverSectionNum === 5 ? <FadeInOut /> : ""}
          </SectionHeader>
          <p className="mb-2">
            株式会社ドワンゴ 教材基盤開発セクション (2024/8~2024/10)
          </p>
          <motion.div whileHover={{ scale: 0.9 }}>
            <Link href="https://blog.nnn.dev/entry/2024/10/29/110000">
              <Image
                src={InternShipOGP}
                alt="株式会社ドワンゴインターンシップOGP画像"
              />
            </Link>
          </motion.div>
        </div>

        <div
          onMouseEnter={() => setHoverSectionNum(6)}
          onMouseLeave={() => setHoverSectionNum(0)}
        >
          <SectionHeader>
            各種リンク{hoverSectionNum === 6 ? <FadeInOut /> : ""}
          </SectionHeader>
          <div className="flex space-x-2">
            <Link href="https://github.com/warabimochi1126">
              <FaGithubSquare size="50" />
            </Link>
            <Link href="https://qiita.com/warabimochi_26">
              <Image src={QiitaIcon} alt="Qiitaのアイコン" width="50" />
            </Link>
            <Link href="https://twitter.com/ecccompsenyou">
              <FaSquareXTwitter size="50" />
            </Link>
          </div>
        </div>

        <div
          onMouseEnter={() => setHoverSectionNum(7)}
          onMouseLeave={() => setHoverSectionNum(0)}
        >
          <SectionHeader>
            連絡先{hoverSectionNum === 7 ? <FadeInOut /> : ""}
          </SectionHeader>
          <p>ecccompsenyou@gmail.com</p>
        </div>
      </div>
    </>
  );
}
