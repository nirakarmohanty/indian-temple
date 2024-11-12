import "./Footer.css";

function Footer() {
  return (
    <div class="container-fluid nav_bg border border-0">
      <div class="row">
        <div class="border border-3">
          <div class="col-4"></div>
          <div class="col-8 flex-column">
            <div>
              <tr>
                <td className="insta-image-design">
                  <i class="bi bi-twitter-x"></i>
                </td>
                <td className="fb-image-design">
                  <i class="bi bi-facebook"></i>
                </td>
              </tr>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
