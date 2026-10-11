window.onload = () => {
    let BlogPostList = ["Welcome to My Blog", "Web Development Tips", "Learning Javascript"]
    let BlogPostDesc = ["This is my first blog Post", "Always write a clean and maintaible code", "Today I learn about DOM"]
    BlogPostList.map((Container, index) => CreateBlogPost(Container, BlogPostDesc[index]))

    const CreateBlogPost = (getPostTitle, getPostText) => {

    // div
    const Container = document.getElementById("blog-post-container")

    // another div
    const blogWrapper = document.createElement("div")
    blogWrapper.className = "blogPost"

    // header div
    const headerDiv = document.createElement("div")
    headerDiv.className = "header-div"
    
    // action div
    const actionDiv = document.createElement("div")
    actionDiv.className = "action-div"

    // add post Btn
    const addPostBtn = document.getElementById("add-post-btn")
    addPostBtn.addEventListener("click", addPost)

    // Post Title
    const PostTitle = document.createElement("h3")
    PostTitle.textContent = getPostTitle
    PostTitle.className = "Title"

    // create edit title btn
    const editTitleBtn = document.createElement("button")
    editTitleBtn.textContent = "Edit Title"
    editTitleBtn.addEventListener("click", () => editPost(PostTitle))

    // Post Content
    const PostContent = document.createElement("p")
    PostContent.textContent = getPostText
    PostContent.className = "Content"

    //create edit content btn
    const editContentBtn = document.createElement("button")
    editContentBtn.textContent = "Edit content"
    editContentBtn.addEventListener("click", () => editPost(PostContent))

    //create delete btn
    const delBtn = document.createElement("button")
    delBtn.textContent = "Delete Post"
    delBtn.addEventListener("click", () => deletePost(blogWrapper))
    
    // Appending to div
    headerDiv.append(PostTitle, editTitleBtn)
    actionDiv.append(editContentBtn, delBtn)
    blogWrapper.append(headerDiv, PostContent, actionDiv)
    Container.append(blogWrapper)
}}

const addPost = () => {
    const getPostTitle = prompt("Input your TITLE: ")
    const getPostText = prompt("Input your post's description")
    CreateBlogPost(getPostTitle, getPostText)
}

const editPost = (element) => {
    const NewText = prompt(`Input new Text: `)
    element.textContent = NewText

}

const deletePost = (element) => {
    element.remove()
} 