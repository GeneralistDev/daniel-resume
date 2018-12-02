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
Comment: https://keybase.io/download
Version: Keybase Go 2.10.1 (windows)

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
ACtxv/ekO3sqM4/Vjksh
=/p+i
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
