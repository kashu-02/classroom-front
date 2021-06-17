<template>
  <div class="privacypolicy">
    <global-header />
    <v-main>
      <v-btn
          class="ma-5"
          color="primary"
          elevation="2"
          outlined
          @click="$router.back()"
      >
        戻る
      </v-btn>
      <v-card class="ma-3" elevation="0">
        <h1>Classroom-Notifier プライバシーポリシー</h1>
        <p>kashu（以下「当方」という）は、当方の提供する Classroom-Notifier の利用者（以下「ユーザー」という）に関する個人情報を含んだ情報（以下「ユーザー情報」という）の取扱いについて、以下のとおりプライバシーポリシー（以下「本ポリシー」という）を定めます。</p>
        <h2>１．情報を取得するアプリ提供者</h2>
        <a href="https://github.com/kashu-02" target="_blank" rel="noopener noreferrer">kashu</a> 
        <h2>２．取得するユーザー情報と目的</h2>
        <p>本アプリケーションで取得するユーザー情報と目的は以下のとおりです。</p>
        <table border="1" style="border-collapse: collapse">
          <tr>
            <th>取得するユーザー情報</th>
            <th></th>
            <th>利用目的</th>
          </tr>
          <tr>
            <td>端末に関する情報</td>
            <td>
              ・デバイスの種類、モデル、メーカー<br>
              ・OS<br>
              ・キャリア情報<br>
              ・IPアドレス<br>
              ・IDFA、AAID、GAID
            </td>
            <td>
              ・パフォーマンス分析<br>
              ・アプリケーションの改善<br>
              ・ユーザーへのサポート・アクセス分析
            </td>
          </tr>
          <tr>
            <td>Googleアカウントに関する情報</td>
            <td>
              ・ユーザーのメールアドレスおよびstudentId<br>
              ・ユーザーが参加しているGoogle Classroomのクラス(クラス名、idを含む)<br>
              ・ユーザーが参加しているクラスの教師のteacherIdおよび名前<br>
              ・ユーザーが参加し、登録をしたGoogle Classroomのお知らせ(id、添付ファイルを含む)
            </td>
            <td>
              ・クラスの表示・メールの送信
            </td>
          </tr>
        </table>
        <p>なお、Google Classroomでの成績等は取得しません。</p>
        <h2>３．取得方法</h2>
        <p>当方は、ユーザーがGoogleアカウントにログインすることにより、Googleアカウントに関する情報を取得します。また、アクセス解析ツール等を用いて、個人が特定されない形で端末に関する情報を提携先（情報提供元，広告主，広告配信先などを含みます。以下，｢提携先｣といいます。）などから収集することがあります。</p>
        <h2>４．通知・公表または同意取得の方法・利用者関与の方法</h2>
        <h3>（１）通知・公表</h3>
        <p>当方は、本ポリシーおよびに関する通知・公表は本アプリケーションのホームページに掲載する方法で行います。</p>
        <h3>（２）同意取得の方法</h3>
        <p>同意の取得は、Googleアカウントへのログイン時に行います。</p>
        <h3>（３）利用者関与の方法</h3>
        <h4>(1)個人情報の削除</h4>
        <p>Googleアカウントに関する情報は、本アプリケーション内の歯車アイコンより、「登録情報の削除」をすることで削除することができます。</p>
        <h4>(2)個人情報の訂正</h4>
        <p>本サービスはGoogleアカウントの情報を利用しているため、Googleアカウントの情報を訂正すると自動的に本サービスの情報も訂正されます。</p>
        <h4>(3)個人情報の開示</h4>
        <p>ユーザーから個人情報の開示を求められたときは，ユーザーに対し，遅滞なくこれを開示します。ただし，開示することにより次のいずれかに該当する場合は，その全部または一部を開示しないこともあり，開示しない決定をした場合には，その旨を遅滞なく通知します。</p>
        <p>
          ・ユーザーまたは第三者の生命，身体，財産その他の権利利益を害するおそれがある場合<br>
          ・当方の業務の適正な実施に著しい支障を及ぼすおそれがある場合<br>
          ・その他法令に違反することとなる場合
        </p>
        <p>前項の定めにかかわらず，履歴情報および特性情報などの個人情報以外の情報については，原則として開示いたしません。</p>
        <h2>５．外部送信・第三者提供・情報収集モジュール</h2>
        <h3>（１）外部送信</h3>
        <p>取得した各情報については、当方が使用しているPaas「Heroku」および「Google Cloud Platform」のサーバーに送信されます。</p>
        <h3>（２）第三者提供</h3>
        <p>当方は、取得したユーザー情報について、以下の場合第三者に提供することがあります。</p>
        <p>・法令に基づき開示・提供を求められた場合</p>
        <h2>６．お問い合わせ</h2>
        <p>当方のプライバシーポリシーに関する、ご意見、ご質問、苦情の申出その他ユーザー情報の取扱いに関するお問い合わせは、以下の窓口にご連絡ください。</p>
        <p>
          <a href="http://docs.google.com/forms/d/e/1FAIpQLSdxK9oRsA7RgI2-7h4uc0ThNy1nwgvusF9MjKC2Uqq3XlKSzQ/viewform?usp=sf_link" target="_blank" rel="noopener noreferrer">お問い合わせフォーム</a> 
        </p>
        <h2>７．改定</h2>
        <p>当方は、当方の裁量に基づいて、本ポリシーを変更します。</p>
        <p>
          制定日・改定日<br>
          制定：2021年6月12日
        </p>
      </v-card>
    </v-main>
    <global-footer />
  </div>
</template>

<script>


import GlobalHeader from "../components/GlobalHeader.vue"
import GlobalFooter from "../components/GlovalFooter.vue"

export default {
  components: {
    'global-header': GlobalHeader,
    'global-footer': GlobalFooter
  },
}
</script>
