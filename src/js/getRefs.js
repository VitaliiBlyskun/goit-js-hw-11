export default function getRefs() {
    return {
        form: document.querySelector("#search-form"),
        input: document.querySelector("input"),
        submitBtn: document.querySelector("button"),
        gallery: document.querySelector(".gallery"),
        loadMoreBtn: document.querySelector(".load-more")
    };
}