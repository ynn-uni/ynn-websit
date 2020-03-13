import defaultSettings from '@/settings'

const title = defaultSettings.title || 'Vue Boilerplate'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
