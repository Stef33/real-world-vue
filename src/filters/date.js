export default value => {
  const date = new Date(value)
  return date.toLocaleString(['fr-FR'], {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  })
}
