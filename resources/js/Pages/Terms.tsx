import GuestLayout from "@/Layouts/GuestLayout";
import { Head } from "@inertiajs/react";

export default function Terms() {
    return (
        <GuestLayout title="利用規約">
            <Head title="利用規約" />

            <div className="p-terms__header">
                {/* <h1 className="p-terms__title">利用規約</h1> */}
                <div className="p-terms__updated">2025年4月1日 制定</div>
            </div>

            <div className="p-terms__content">
                <section className="p-terms__section">
                    <h2 className="p-terms__section-title">
                        第1条（利用規約の適用）
                    </h2>
                    <div className="p-terms__section-content">
                        <p>
                            本利用規約（以下「本規約」といいます）は、当社が提供するエンジニアとお仕事のマッチングサービス「match」（以下「本サービス」といいます）の利用に関する条件を、本サービスを利用するお客様（以下「ユーザー」といいます）と当社との間で定めるものです。
                        </p>
                        <p>
                            ユーザーは、本規約に同意の上、本サービスを利用するものとします。
                        </p>
                    </div>
                </section>

                <section className="p-terms__section">
                    <h2 className="p-terms__section-title">第2条（定義）</h2>
                    <div className="p-terms__section-content">
                        <p>
                            本規約において使用する用語の定義は以下のとおりとします。
                        </p>
                        <ol className="p-terms__list p-terms__list--numbered">
                            <li>
                                「本サービス」とは、当社が提供するエンジニアとお仕事のマッチングサービス「match」をいいます。
                            </li>
                            <li>
                                「ユーザー」とは、本規約に同意の上、本サービスを利用する個人または法人をいいます。
                            </li>
                            <li>
                                「エンジニア」とは、本サービスを通じて仕事を受注する個人をいいます。
                            </li>
                            <li>
                                「クライアント」とは、本サービスを通じて仕事を依頼する個人または法人をいいます。
                            </li>
                            <li>
                                「コンテンツ」とは、ユーザーが本サービスに投稿する情報（テキスト、画像、動画等）をいいます。
                            </li>
                        </ol>
                    </div>
                </section>

                <section className="p-terms__section">
                    <h2 className="p-terms__section-title">
                        第3条（ユーザー登録）
                    </h2>
                    <div className="p-terms__section-content">
                        <ol className="p-terms__list p-terms__list--numbered">
                            <li>
                                本サービスの利用を希望する者は、当社所定の方法により、ユーザー登録を行うものとします。
                            </li>
                            <li>
                                当社は、当社の基準によりユーザー登録の可否を判断し、登録を認める場合にはその旨を通知します。この通知により、ユーザー登録が完了します。
                            </li>
                            <li>
                                当社は、以下の場合にユーザー登録を拒否することがあります。
                                <ul className="p-terms__list">
                                    <li>虚偽の情報を提供した場合</li>
                                    <li>
                                        過去に本規約違反等により、ユーザー登録の取消処分を受けたことがある場合
                                    </li>
                                    <li>その他、当社が不適切と判断した場合</li>
                                </ul>
                            </li>
                        </ol>
                    </div>
                </section>

                <section className="p-terms__section">
                    <h2 className="p-terms__section-title">
                        第4条（アカウント管理）
                    </h2>
                    <div className="p-terms__section-content">
                        <ol className="p-terms__list p-terms__list--numbered">
                            <li>
                                ユーザーは、自己の責任においてアカウントを管理・保管するものとし、第三者に利用させたり、貸与、譲渡、売買等をしてはならないものとします。
                            </li>
                            <li>
                                アカウントの管理不十分、使用上の過誤、第三者の使用等による損害の責任はユーザーが負うものとし、当社は一切の責任を負いません。
                            </li>
                            <li>
                                ユーザーは、アカウントが盗用されたり、第三者に使用されていることが判明した場合には、直ちに当社にその旨を連絡するとともに、当社からの指示に従うものとします。
                            </li>
                        </ol>
                    </div>
                </section>

                <section className="p-terms__section">
                    <h2 className="p-terms__section-title">
                        第5条（禁止事項）
                    </h2>
                    <div className="p-terms__section-content">
                        <p>
                            ユーザーは、本サービスの利用にあたり、以下の行為をしてはならないものとします。
                        </p>
                        <ol className="p-terms__list p-terms__list--numbered">
                            <li>法令または公序良俗に違反する行為</li>
                            <li>犯罪行為に関連する行為</li>
                            <li>
                                当社または第三者の知的財産権、肖像権、プライバシー、名誉、その他の権利または利益を侵害する行為
                            </li>
                            <li>
                                政治活動、宗教活動、マルチ商法、またはそれらに類似する行為
                            </li>
                            <li>
                                当社のサーバーまたはネットワークの機能を破壊したり、妨害したりする行為
                            </li>
                            <li>本サービスの運営を妨害するおそれのある行為</li>
                            <li>不正アクセスをし、またはこれを試みる行為</li>
                            <li>他のユーザーのアカウントを利用する行為</li>
                            <li>
                                当社のサービスに関連して、反社会的勢力に対して直接または間接に利益を供与する行為
                            </li>
                            <li>
                                当社または第三者に不利益、損害、不快感を与える行為
                            </li>
                            <li>その他、当社が不適切と判断する行為</li>
                        </ol>
                    </div>
                </section>

                <section className="p-terms__section">
                    <h2 className="p-terms__section-title">
                        第6条（サービスの停止・中断）
                    </h2>
                    <div className="p-terms__section-content">
                        <p>
                            当社は、以下のいずれかの事由があると判断した場合、ユーザーに事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします。
                        </p>
                        <ol className="p-terms__list p-terms__list--numbered">
                            <li>
                                本サービスにかかるシステムの保守点検または更新を行う場合
                            </li>
                            <li>
                                地震、落雷、火災、停電、天災またはウイルスの蔓延などの不可抗力により、本サービスの提供が困難となった場合
                            </li>
                            <li>
                                コンピューターまたは通信回線等が事故により停止した場合
                            </li>
                            <li>
                                その他、当社が本サービスの提供が困難と判断した場合
                            </li>
                        </ol>
                        <p>
                            当社は、本サービスの提供の停止または中断により、ユーザーまたは第三者が被ったいかなる不利益または損害について、理由を問わず一切の責任を負わないものとします。
                        </p>
                    </div>
                </section>

                <section className="p-terms__section">
                    <h2 className="p-terms__section-title">第7条（著作権）</h2>
                    <div className="p-terms__section-content">
                        <ol className="p-terms__list p-terms__list--numbered">
                            <li>
                                ユーザーは、自ら著作権等の必要な知的財産権を有するか、または必要な権利者の許諾を得た文章、画像や映像等のコンテンツに関してのみ、本サービスを利用し、投稿することができるものとします。
                            </li>
                            <li>
                                ユーザーが本サービスを利用して投稿したコンテンツの著作権については、当該ユーザーその他既存の権利者に留保されるものとします。
                            </li>
                            <li>
                                ユーザーが投稿したコンテンツについて、当社は本サービスの円滑な提供、当社の事業展開、宣伝・広告等のために必要な範囲内で利用できるものとし、ユーザーはこれに同意するものとします。
                            </li>
                        </ol>
                    </div>
                </section>

                <section className="p-terms__section">
                    <h2 className="p-terms__section-title">第8条（退会）</h2>
                    <div className="p-terms__section-content">
                        <ol className="p-terms__list p-terms__list--numbered">
                            <li>
                                ユーザーは、当社所定の手続きにより、本サービスから退会できるものとします。
                            </li>
                            <li>
                                退会にあたり、当社に対して負っている債務がある場合は、ユーザーは当社に対して負っている債務の一切について当然に期限の利益を失い、直ちに当社に対して全ての債務の支払いを行わなければなりません。
                            </li>
                            <li>
                                退会後の利用者情報の取扱いについては、第9条の規定に従うものとします。
                            </li>
                        </ol>
                    </div>
                </section>

                <section className="p-terms__section">
                    <h2 className="p-terms__section-title">
                        第9条（保証の否認および免責事項）
                    </h2>
                    <div className="p-terms__section-content">
                        <ol className="p-terms__list p-terms__list--numbered">
                            <li>
                                当社は、本サービスに事実上または法律上の瑕疵（安全性、信頼性、正確性、完全性、有効性、特定の目的への適合性、セキュリティなどに関する欠陥、エラーやバグ、権利侵害などを含みます。）がないことを明示的にも黙示的にも保証しておりません。
                            </li>
                            <li>
                                当社は、本サービスに起因してユーザーに生じたあらゆる損害について、当社の故意または重過失による場合を除き、一切の責任を負いません。
                            </li>
                            <li>
                                当社は、本サービスに関して、ユーザーと他のユーザーまたは第三者との間において生じた取引、連絡または紛争等について一切責任を負いません。
                            </li>
                        </ol>
                    </div>
                </section>

                <section className="p-terms__section">
                    <h2 className="p-terms__section-title">
                        第10条（サービス内容の変更・終了）
                    </h2>
                    <div className="p-terms__section-content">
                        <ol className="p-terms__list p-terms__list--numbered">
                            <li>
                                当社は、当社の都合により、本サービスの内容を変更し、または提供を終了することができます。
                            </li>
                            <li>
                                当社が本サービスの提供を終了する場合、当社は可能な限りユーザーに事前に通知するものとします。
                            </li>
                        </ol>
                    </div>
                </section>

                <section className="p-terms__section">
                    <h2 className="p-terms__section-title">
                        第11条（利用規約の変更）
                    </h2>
                    <div className="p-terms__section-content">
                        <ol className="p-terms__list p-terms__list--numbered">
                            <li>
                                当社は、必要と判断した場合には、ユーザーに通知することなく本規約を変更することができるものとします。
                            </li>
                            <li>
                                本規約の変更後、本サービスの利用を継続した場合、ユーザーは変更後の規約に同意したものとみなされます。
                            </li>
                        </ol>
                    </div>
                </section>

                <section className="p-terms__section">
                    <h2 className="p-terms__section-title">
                        第12条（通知または連絡）
                    </h2>
                    <div className="p-terms__section-content">
                        <p>
                            ユーザーと当社との間の通知または連絡は、当社の定める方法によって行うものとします。当社は、ユーザーから、当社が別途定める方式に従った変更届け出がない限り、現在登録されている連絡先が有効なものとみなして当該連絡先へ通知または連絡を行い、これらは、発信時にユーザーへ到達したものとみなします。
                        </p>
                    </div>
                </section>

                <section className="p-terms__section">
                    <h2 className="p-terms__section-title">
                        第13条（権利義務の譲渡の禁止）
                    </h2>
                    <div className="p-terms__section-content">
                        <p>
                            ユーザーは、当社の書面による事前の承諾なく、利用契約上の地位または本規約に基づく権利もしくは義務を第三者に譲渡し、または担保に供することはできません。
                        </p>
                    </div>
                </section>

                <section className="p-terms__section">
                    <h2 className="p-terms__section-title">
                        第14条（準拠法・裁判管轄）
                    </h2>
                    <div className="p-terms__section-content">
                        <ol className="p-terms__list p-terms__list--numbered">
                            <li>
                                本規約の解釈にあたっては、日本法を準拠法とします。
                            </li>
                            <li>
                                本サービスに関して紛争が生じた場合には、当社の本店所在地を管轄する裁判所を専属的合意管轄とします。
                            </li>
                        </ol>
                    </div>
                </section>
            </div>
        </GuestLayout>
    );
}
