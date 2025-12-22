export function MessageSection() {
  return (
    <section id="message" className="py-0 bg-[rgba(220,228,232,1)]">
      <div className="flex flex-col-reverse lg:flex-row">
        {/* 左側（デスクトップ）/ 下側（スマホ）：代表写真と名前・役職 */}
        <div className="lg:w-2/5 relative">
          <div className="aspect-[3/4] lg:aspect-auto lg:h-full relative">
            <img
              src="/professional-japanese-businessman-portrait-photo.jpg"
              alt="代表取締役 齋藤 伸幸"
              className="w-full h-full object-cover"
            />
            {/* オーバーレイグラデーション */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            {/* テキストを画像の下部に配置 */}
            <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12 text-white">
              <p className="font-medium text-xl lg:text-2xl">代表取締役　齋藤 伸幸</p>
              <p className="text-base sm:text-lg opacity-80 mt-2 leading-relaxed">
                一級建築施工管理技士 / 一級管工事施工管理技士
                <br />
                第二種電気工事士 / 宅地建物取引士
                <br />
                ホームインスペクター（住宅診断士）
              </p>
            </div>
          </div>
        </div>

        {/* 右側（デスクトップ）/ 上側（スマホ）：テキストエリア */}
        <div className="lg:w-3/5 flex items-center">
          <div className="px-8 py-20 sm:px-12 sm:py-28 lg:px-16 lg:py-32 xl:px-24">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-[4.5rem]">
              代表メッセージ
            </h2>

            <div className="text-primary leading-[2] space-y-6 text-base sm:text-lg">
              <p>
                私たちが主に手掛けているのは、空き家の再生と住宅のリノベーションです。
                <br />
                <span className="text-xl sm:text-2xl md:text-3xl font-bold font-serif leading-relaxed inline-block my-4">
                  「そこに暮らす人、
                  <br className="sm:hidden" />
                  <span className="sm:hidden pl-[1em]">集う人のために、</span>
                  <span className="hidden sm:inline">集う人のために、</span>
                  <br className="sm:hidden" />
                  <span className="sm:hidden pl-[1em]">建物の最適解を提供する」</span>
                  <span className="hidden sm:inline">建物の最適解を提供する」</span>
                </span>
                <br />
                という共通の理念に基づいて向き合っています。
              </p>

              <p>
                経年変化を遂げた建物は一つとして同じ状態ではありません。中には再生にあたって慎重な判断が欠かせないものもあります。残せる部分を確かな目で見極め、過不足なく整えていくことで建物は再びその役割を取り戻すことができるのだと考えています。
              </p>

              <p>
                まずは現場に赴き、建物の構造を把握し、法的な調整を含めた全体像を捉え、お客様の用途や理想とする暮らしに沿った設計と施工を、必要以上に踏み込むことなく、確かな根拠をもって進めていく。
              </p>

              <p>
                限られた予算であっても空間に表情を与え、暮らしを豊かにする方法は存在します。すべてを新しくするのではなく、活かせるものを残し、整えるべきところにだけ工夫を施す。この過不足のないバランスが取れたとき、建物はまた人を迎え入れる場として息を吹き返します。機能、デザイン、価格の「丁度良い」バランスを追求していきます。
              </p>

              <p>
                淡々と、しかし確かな意図をもって整えていく。その先に、オーナー様だけでなく、地域やそこで過ごす人々へと静かに価値が巡っていくような循環が生まれると信じています。その建物に何が残り、何ができるのか。落ち着いて、丁寧に見極めていきたいと思っています。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
