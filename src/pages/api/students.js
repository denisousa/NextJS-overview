// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json([
    {id: 1, name: 'Drica'},
    {id: 2, name: 'Gabs'},
    {id: 3, name: 'Paixão'},
    {id: 4, name: 'Matheus'},
    {id: 5, name: 'Edson'},
    {id: 6, name: 'Lucas'},
    {id: 6, name: 'Eliakim'},
  ])
}
