export async function getProjects() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6')
    if (!res.ok) throw new Error('Failed to fetch projects')
    return res.json()
  }
  
  export async function getProject(id: string) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    if (!res.ok) throw new Error('Failed to fetch project')
    return res.json()
  }
  
  export async function getBlogPosts(page = 1, limit = 5) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`)
    if (!res.ok) throw new Error('Failed to fetch blog posts')
    const total = parseInt(res.headers.get('x-total-count') || '0', 10)
    const posts = await res.json()
    return { posts, total }
  }
  
  export async function getBlogPost(id: string) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    if (!res.ok) throw new Error('Failed to fetch blog post')
    return res.json()
  }