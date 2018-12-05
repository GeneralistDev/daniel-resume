<template>
  <section class="text-center">
    <logo/>
    <p>Email: <a href="mailto:daniel@danielparker.com.au">daniel@danielparker.com.au</a></p>
    <p>Twitter: <a
      href="https://twitter.com/CodyMcCodeFace"
      target="_blank">@CodyMcCodeFace</a></p>
    <p>Github: <a
      href="https://github.com/rlgod"
      target="_blank">Rlgod</a></p>
    <p>Gitlab: <a
      href="https://gitlab.com/CodyMcCodeFace"
      target="_blank">CodyMcCodeFace</a></p>
    <p>LinkedIn: <a
      href="https://www.linkedin.com/in/danielptech/"
      target="_blank">danielptech</a></p>

    <h4 class="mt-5">Proof of identity</h4>
    <p>
      <a
        href="https://keybase.io/verify"
        target="_blank">Go to keybase to verify message
      </a>
    </p>
    <div class="highlight col-12 col-sm-6 col-md-8 m-auto">
      <div class="copy-clipboard float-right mt-3">
        <b-btn
          id="proof-button"
          @click="copyProof()">Copy</b-btn>
        <b-tooltip
          :show="showProofTooltip"
          target="proof-button"
          placement="top"
          triggers="">
          Copied to clipboard
        </b-tooltip>
      </div>
      <pre class="pre-scrollable col-12 col-sm-10 m-auto">
      <code>
        {{ proof }}
      </code>
      </pre>
    </div>

    <h4 class="mt-5">Public Key</h4>
    <div class="highlight col-12 col-sm-6 col-md-8 m-auto">
      <div class="copy-clipboard float-right mt-3">
        <b-btn
          id="public-key-tooltip"
          @click="copyPublicKey()">Copy</b-btn>
        <b-tooltip
          :show="showPublicKeyTooltip"
          target="public-key-tooltip"
          placement="top"
          triggers="">
          Copied to clipboard
        </b-tooltip>
      </div>
      <pre class="pre-scrollable col-12 col-sm-10 m-auto">
      <code>
        {{ publicKey }}
      </code>
      </pre>
    </div>
  </section>
</template>
<script>
import Logo from '~/components/Logo.vue'

export default {
  head() {
    return {
      title: 'Contact Daniel'
    }
  },
  components: {
    Logo
  },
  data: function() {
    return {
      showProofTooltip: false,
      showPublicKeyTooltip: false,
      proof: `
-----BEGIN PGP SIGNED MESSAGE-----
Hash: SHA512

Hello, my name is Daniel. I can verify that the website danielparker.com.au is owned and operated by me.
-----BEGIN PGP SIGNATURE-----
Version: Keybase OpenPGP v2.0.80
Comment: https://keybase.io/crypto

wsFcBAABCgAGBQJcA+TdAAoJEOVa+3MgvTQCEhUP/2rlMJ79FOW9LWwvIRP/mLev a6805MwfM09IoHpiyKMM69GU37iAkVXujWNX/UAZMcmftITrYnGaZSLQ0wxozDcm wbn6dgKSjbr5yedMhclvFiuFMF5Ab9oTlDEKfVR7xWvStEsTmTJ9lMGjtwBvzvBJ r3cXbJNip01TGYVZyQ2F+nziGVLn2qFymo5KJzfu12sCuKp4qctud1G95jYICg3+ WD1/BtqQXkLjUxWcmKtiUFu/eXEJXm6nPC6QlC/Nz4EQTQDpbE2cL/FaT8s02dQB Blx0FsuSLr5OfX5hJQyLEK1dVs8FxgcJ2tg71r8EPzE0oshxkSjmhqH6e8XOeSAn 4k6ZGy43c3NnOQwDQR39odmnAjuKRQ1GHQm5JAOR7P87sMgMxBmvQzhGgVoR5mDT xQzzTik/MDdpKW2TyJvzmVe20Kocduj4emjci5BXCwHsnKT+C0lhFAJGfR2UQHiQ h9REmcu5M8U6vl1CjDN8DJc2sxOhoAJosims8+Z41pCLJ+9ajgjbJoXCETGuRlMp YGMaGkAGW8ZlA/FQdOIPnLnEfB3gx9dQd07EI/3dpDf3VnxiQJW97Bwuzui2qvGW hcgq4xaTIA7+oIScaMBpGaaZa8jd4a2Ef9HLBruaGbm2GDj4ryai8+zRsCJ7DSdX M81wWqDVCLv/idc3WuRU
=lcjl
-----END PGP SIGNATURE-----
`,
      publicKey: `
-----BEGIN PGP PUBLIC KEY BLOCK-----

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
=u5Bk
-----END PGP PUBLIC KEY BLOCK-----
      `
    }
  },
  methods: {
    copyProof: function() {
      const el = document.createElement('textarea')
      el.value = this.proof
      document.body.appendChild(el)
      el.select()
      document.execCommand('copy')
      document.body.removeChild(el)
      this.showProofTooltip = true
      setTimeout(() => {
        this.showProofTooltip = false
      }, 1000)
    },
    copyPublicKey: function() {
      const el = document.createElement('textarea')
      el.value = this.publicKey
      document.body.appendChild(el)
      el.select()
      document.execCommand('copy')
      document.body.removeChild(el)
      this.showPublicKeyTooltip = true
      setTimeout(() => {
        this.showPublicKeyTooltip = false
      }, 1000)
    }
  }
}
</script>

<style scoped>
section {
  padding-bottom: 40px;
}

pre,
code {
  white-space: pre-wrap;
}

.highlight {
  background-color: #f7f7f9;
  text-align: left;
}

.logo {
  margin-bottom: 20px;
}
</style>
