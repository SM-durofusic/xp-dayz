import { css } from "glamor";

const homeBlogPostStyle = css({
  width: "100%",
  backgroundColor: "white",
  padding: "20px 15px",
  borderRadius: 5,
  display: "inline-block",
  marginBottom: 10,
  marginTop: 10,
  boxShadow: "2px 6px 19px 0px rgba(82,77,82,0.16)"
});

const homeBlogPostText = css({
  fontSize: 14,
  color: "#4b4b4b",
  lineHeight: 1.8
});

const homeBlogPostAuthor = css({
  fontWeight: 400,
  fontSize: 16
});

const homeBlogPostTitle = css({
  margin: 0,
  fontSize: 24
});

const homeBlogPostExpandButton = css({
  color: "#eee",
  border: "1px solid #333333",
  backgroundColor: "#333333",
  padding: "5px 15px",
  cursor: "pointer"
});

const styles = {
  homeBlogPostStyle,
  homeBlogPostText,
  homeBlogPostAuthor,
  homeBlogPostTitle,
  homeBlogPostExpandButton
};

export default styles;
