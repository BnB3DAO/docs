export default defineAppConfig({
  ui: {
    primary: 'green',
    gray: 'slate',
    footer: {
      bottom: {
        left: 'text-sm text-gray-500 dark:text-gray-400',
        wrapper: 'border-t border-gray-200 dark:border-gray-800'
      }
    }
  },
  seo: {
    siteName: 'BnB3 Docs'
  },
  header: {
    logo: '/logo.png',
    titleBadge: 'Web3',
    search: true,
    colorMode: true,
    links: [{
      'to': 'https://BnB3.RWA-Wallet.com',
      'target': '_blank',
      'label': 'DApp',
      'aria-label': 'DApp'
    }]
  },
  toc: {
    title: 'Table of Contents',
    bottom: {
      title: 'Community',
      links: [{
        icon: 'i-heroicons-star',
        label: 'Go to BNB3',
        to: 'https://hashkey-testnet-bnb3.rwa-wallet.com',
        target: '_blank'
      }, {
        icon: 'i-heroicons-book-open',
        label: 'Give response for us',
        to: 'https://github.com/BnB3DAO/Press-Conference/issues?page=1&q=is%3Aissue+is%3Aopen',
        target: '_blank'
      }]
    }
  }
})
