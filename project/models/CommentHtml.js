class CommentItem extends HTMLElement {

    connectedCallback() {
        this.innerHTML = `
                <div class="comment_info">
                    <p>${this.user}</p>
                    <time>${this.date}</time>
                </div>
                <p class="comment_content">${this.content}</p>`
        this.classList.add("comments_item")
    }

}

customElements.define("comment-item", CommentItem);