"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import BackgroundPattern from "./components/BackgroundPattern";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaGithub } from "react-icons/fa";

export default function Home() {
  
  // 画像拡大用の状態管理
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // AOSの初期化
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out",
    });
  }, []);

  const skills = [
    "Python", "C", "C++", "Java", "JavaScript", "TypeScript",
    "React", "Next.js", "Tailwind CSS", 
    "Ubuntu", "Docker", "Processing", "SQL", 
    "VS Code", "Git", "GitHub"
  ];

  return (
    <div className="min-h-screen relative font-sans text-gray-700 flex items-center justify-center py-24 px-4">
      
      <BackgroundPattern />

      <div className="max-w-5xl w-full mx-auto grid grid-cols-12 gap-8">
        
        {/* === 左側: プロフィール === */}
        <div 
          className="col-span-12 lg:col-span-4 h-fit lg:sticky lg:top-10"
          data-aos="fade-right"
        >
          <div className="bg-white rounded-3xl shadow-[0_0_20px_rgba(0,0,0,0.2)] p-6 text-center">
            <div className="relative w-48 h-48 mx-auto -mt-16 mb-6 rounded-3xl shadow-md bg-gray-200">
               <img 
                 src="/IMG_2883.jpeg" 
                 alt="Profile" 
                 className="object-cover w-full h-full rounded-3xl"
               />
            </div>
              <p className="text-sm text-gray-400 font-medium mb-1 tracking-wider">たにぐち かお</p>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">谷口 香央</h2>
              <p className="text-gray-500 mb-8 bg-gray-100 inline-block px-4 py-1.5 rounded-lg text-sm">
                  大阪公立大学 <br />
                  工学部情報工学科 4年生
              </p>

            <div className="bg-gray-50 rounded-2xl p-6 text-left space-y-4">
              <InfoItem icon={<FaPhoneAlt />} title="Phone" value="090-9288-3182" color="text-pink-500" />
              <InfoItem icon={<FaEnvelope />} title="Email" value="se23466a@st.omu.ac.jp" color="text-green-500" />
              <InfoItem icon={<FaMapMarkerAlt />} title="Location" value="Osaka, Japan" color="text-purple-500" />
            </div>

          </div>
        </div>

        {/* === 右側: コンテンツエリア === */}
        <div className="col-span-12 lg:col-span-8 space-y-8">

          {/* 自己紹介 */}
          <div 
            className="bg-white rounded-3xl shadow-[0_0_20px_rgba(0,0,0,0.2)] p-10"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <SectionTitle title="自己紹介" />

              <div className="space-y-6 text-gray-700 leading-loose">
                <p>
                  大阪公立大学工学部情報工学科4年生の谷口香央です。<br />
                  スマートプラットフォーム研究室に所属しており、<span className="font-bold text-gray-900">屋内測位システムの開発やデータ解析</span>に関わっています。
                </p>

                <p>
                  また、1年生のときに白鷺祭実行委員の情報部でポスターや大弾幕のデザインに関わり、2年生以降はアカペラサークルのライブにてデザイン部としてフライヤーやバンドパンフレットページのデザインを担当してきました。<br />
                  大学生活を通して、<span className="font-bold border-b-2 border-orange-400">「頭の中のデザインを形にする能力」</span>を実践的に養っています。
                </p>

                <div className="bg-gray-50 p-5 rounded-lg border-l-4 border-orange-500 mt-8">
                  <p className="font-medium text-gray-900 m-0">
                    将来は<span className="text-orange-600 font-bold">技術とデザインの両方を活かして</span>、ユーザーに喜ばれるサービスを作りたいと考えています。
                  </p>
                </div>
              </div>

            {/* スキル一覧 */}
            <div className="mt-12">
              <SectionTitle title="使える言語フレームワーク・ツール" />
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {skills.map((skill, index) => (
                  <div 
                    key={index} 
                    className="bg-white border border-gray-200 rounded-lg py-2 px-3 text-center text-sm font-bold text-gray-700 shadow-sm hover:shadow hover:border-orange-400 hover:text-orange-500 transition-all duration-300 hover:-translate-y-1"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* デザイン例 */}
          <div 
            className="bg-white rounded-3xl shadow-[0_0_20px_rgba(0,0,0,0.2)] p-10"
            data-aos="fade-up"
            data-aos-delay="300"
          >
             <SectionTitle title="サークルで作ったデザイン" />
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* バンドページ */}
                <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-2 group flex flex-col">
                   <div className="h-56 overflow-hidden shrink-0">
                     <img 
                       src="/design1.png" 
                       alt="バンドページ" 
                       className="w-full h-full object-cover object-top group-hover:scale-105 transition duration-500 cursor-pointer" 
                       onClick={() => setSelectedImage("/design1.png")}
                     />
                   </div>
                   <div className="p-6 flex flex-col flex-grow">
                     <h3 className="text-xl font-bold text-gray-800 mb-2">バンドページ</h3>
                     <p className="text-gray-600 text-sm leading-relaxed mb-6">
                       初めて任されたパンフレットのバンドページです。<br />メンバーのやわらかい雰囲気が伝わるデザインを意識しました。
                     </p>
                     <div className="flex gap-2 mt-auto">
                       <span className="bg-orange-100 text-orange-600 text-xs px-2.5 py-1 rounded-md font-bold">FireAlpaca</span>
                     </div>
                   </div>
                </div>

                {/* オープニングメンバーページ */}
                <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-2 group flex flex-col">
                   <div className="h-56 overflow-hidden bg-gray-200 shrink-0">
                     <img 
                       src="/design2.png" 
                       alt="OPメンバーページ" 
                       className="w-full h-full object-cover object-top group-hover:scale-105 transition duration-500 cursor-pointer" 
                       onClick={() => setSelectedImage("/design2.png")}
                     />
                   </div>
                   <div className="p-6 flex flex-col flex-grow">
                     <h3 className="text-xl font-bold text-gray-800 mb-2">OPメンバーページ</h3>
                     <p className="text-gray-600 text-sm leading-relaxed mb-6">
                       サークルライブのオープニング曲に出演するメンバーの意気込みをまとめ、ワクワク感を引き出すレイアウトにしました。
                     </p>
                     <div className="flex gap-2 mt-auto">
                       <span className="bg-orange-100 text-orange-600 text-xs px-2.5 py-1 rounded-md font-bold">FireAlpaca</span>
                     </div>
                   </div>
                </div>

                {/* バンドページ（2つ目） */}
                <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-2 group flex flex-col">
                   <div className="h-56 overflow-hidden shrink-0">
                     <img 
                       src="/design3.png" 
                       alt="バンドページ" 
                       className="w-full h-full object-cover object-top group-hover:scale-105 transition duration-500 cursor-pointer" 
                       onClick={() => setSelectedImage("/design3.png")}
                     />
                   </div>
                   <div className="p-6 flex flex-col flex-grow">
                     <h3 className="text-xl font-bold text-gray-800 mb-2">バンドページ</h3>
                     <p className="text-gray-600 text-sm leading-relaxed mb-6">
                       サークルライブのフライヤーです。<br />重要な情報が目に入りやすいように意識し、冬らしい青の色感のデザインにしました。
                     </p>
                     <div className="flex gap-2 mt-auto">
                       <span className="bg-orange-100 text-orange-600 text-xs px-2.5 py-1 rounded-md font-bold">FireAlpaca</span>
                     </div>
                   </div>
                </div>

                {/* フライヤー */}
                <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-2 group flex flex-col">
                   <div className="h-56 overflow-hidden shrink-0">
                     <img 
                       src="/design4.png" 
                       alt="フライヤー" 
                       className="w-full h-full object-cover object-top group-hover:scale-105 transition duration-500 cursor-pointer" 
                       onClick={() => setSelectedImage("/design4.png")}
                     />
                   </div>
                   <div className="p-6 flex flex-col flex-grow">
                     <h3 className="text-xl font-bold text-gray-800 mb-2">フライヤー</h3>
                     <p className="text-gray-600 text-sm leading-relaxed mb-6">
                       初めて任されたパンフレットのバンドページです。<br />メンバーのやわらかい雰囲気が伝わるデザインを意識しました。
                     </p>
                     <div className="flex gap-2 mt-auto">
                       <span className="bg-orange-100 text-orange-600 text-xs px-2.5 py-1 rounded-md font-bold">FireAlpaca</span>
                     </div>
                   </div>
                </div>

             </div>
          </div>

          {/* プログラミング作品 */}
          <div 
            className="bg-white rounded-3xl shadow-[0_0_20px_rgba(0,0,0,0.2)] p-10"
            data-aos="fade-up"
            data-aos-delay="200"
          >
             <SectionTitle title="1年生のときのゲーム作成" />
             <div className="grid grid-cols-1 gap-6">
                
                {/* Processingゲーム */}
                <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col md:flex-row">
                   <div className="w-full md:w-1/2 bg-black shrink-0 relative aspect-video md:aspect-auto">
                     <video 
                       src="/sketch_231209a.mp4" 
                       controls
                       muted
                       loop
                       className="w-full h-full object-cover" 
                     />
                   </div>
                   <div className="p-6 flex flex-col flex-grow justify-center">
                     <h3 className="text-xl font-bold text-gray-800 mb-2">ハンバーガー屋ゲーム</h3>
                     <p className="text-gray-600 text-sm leading-relaxed mb-6">
                       Processingを用いて作成したオリジナルゲームです。<br />
                       オブジェクト指向を意識し、物体の動作や当たり判定などを実装しました。
                     </p>
                     <div className="flex gap-2 mb-6">
                       <span className="bg-blue-100 text-blue-600 text-xs px-2.5 py-1 rounded-md font-bold">Processing</span>
                       <span className="bg-red-100 text-red-600 text-xs px-2.5 py-1 rounded-md font-bold">Java</span>
                     </div>
                     <a 
                       href="https://github.com/KaoTani/Processing-Game.git" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="inline-flex items-center gap-2 bg-gray-800 text-white text-sm font-bold px-4 py-2.5 rounded-lg hover:bg-gray-700 transition-colors w-fit"
                     >
                       <FaGithub className="text-lg" /> GitHubでコードを見る
                     </a>
                   </div>
                </div>

             </div>
          </div>
          
           <footer className="text-center text-gray-400 text-sm py-4 mt-8">
             © 2026 All Rights Reserved by Me.
           </footer>

        </div>
      </div>

      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm transition-opacity"
          onClick={() => setSelectedImage(null)} // 黒い背景をクリックしたら閉じる
        >
          <div className="relative max-w-5xl max-h-[90vh] w-full h-full flex items-center justify-center">
            {/* ×ボタン */}
            <button 
              className="absolute top-0 right-0 md:-top-5 md:-right-10 text-white text-4xl hover:text-gray-300 transition-colors cursor-pointer z-50"
              onClick={() => setSelectedImage(null)}
            >
              &times;
            </button>
            {/* 拡大画像 */}
            <img 
              src={selectedImage} 
              alt="Enlarged design" 
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()} // 画像自体をクリックしても閉じないようにする
            />
          </div>
        </div>
      )}

    </div>
  );
}

// コンポーネント群

const InfoItem = ({ icon, title, value, color }: { icon: React.ReactNode, title: string, value: string, color: string }) => (
  <div className="flex items-center gap-4 border-b border-gray-100 pb-3 last:border-0 last:pb-0">
    <div className={`text-xl ${color} bg-white shadow-sm p-2 rounded-lg`}>{icon}</div>
    <div>
      <p className="text-xs text-gray-400">{title}</p>
      <p className="text-sm font-medium text-gray-700">{value}</p>
    </div>
  </div>
);

const SectionTitle = ({ title }: { title: string }) => (
    <div className="relative mb-8 w-fit">
        <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
        <div className="h-1 w-full bg-gradient-to-r from-orange-500 to-rose-500 rounded mt-2"></div>
    </div>
);