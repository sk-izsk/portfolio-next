export interface RouteLink {
  name: string
  path: string
}

export interface FooterData {
  outerLink: boolean
  header: string
  routeLinks: RouteLink[]
}
const footerData: FooterData[] = [
  {
    outerLink: true,
    header: 'SOCIAL',
    routeLinks: [
      {
        name: 'Github',
        path: 'https://github.com/sk-izsk',
      },
      {
        name: 'LinkedIn',
        path: 'https://www.linkedin.com/in/skizsk/',
      },
      {
        name: 'Twitter',
        path: 'https://twitter.com/Sk_iZsk',
      },
      {
        name: 'Facebook',
        path: 'https://www.facebook.com/Sk.iZsk',
      },
      {
        name: 'Instagram',
        path: 'https://www.instagram.com/sk_izsk/',
      },
      {
        name: 'Telegram',
        path: 'https://t.me/sk_izsk',
      },
      {
        name: 'Email',
        path: 'mailto:sk.zeeshan1992@gmail.com',
      },
    ],
  },
  {
    outerLink: false,
    header: 'LEGAL',
    routeLinks: [
      {
        name: 'Privacy Policy',
        path: '/privacy-policy',
      },
      {
        name: '© 2021, Zeeshan',
        path: '/',
      },
    ],
  },
]

export { footerData }
