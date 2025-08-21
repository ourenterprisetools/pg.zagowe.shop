const guarantee = document.querySelectorAll("#guarantee");

// Set guarantee days
const guaranteeDays = "60";

guarantee.forEach(function (e) {
  if (e.classList.contains("custom")) return;

  // Product Name
  let productName =
    typeof e.dataset.productname !== "undefined"
      ? e.dataset.productname
      : "BurnFlow";

  // defining the FDA seal
  const isDigistore = document.body.classList.contains("digistore24");
  const fdaBadge = isDigistore ? "fda-ds24.png" : "fda.png";

  // Content for the guarantee section
  const guaranteeText = {
    guaranteeTitle: `100% Satisfaction or Your Money Back <br class="d-none d-md-block"><span>${guaranteeDays}-Day Guarantee</span>`,

    guaranteeContent: `We're so confident you'll love your experience with ${productName} that we offer a 100% satisfaction guarantee for ${guaranteeDays} days. Try it, take your time, and see how it works for you. If you're not completely happy for any reason, just let us know — and we’ll refund every penny, no questions asked.`,
  };

  // Build the HTML for the product item
  e.innerHTML = `
		<div class="container position-relative py-5">
			<div class="row align-items-center justify-content-center">
				<div class="col-12 col-md-3 text-center">
					<figure><img src="${assetsPath}images/guarantee-badge.webp" alt="Guarantee" class="mb-3"></figure>
				</div>
				<div class="col-12 col-md-9">
					<h2 class="fs-3 mb-3">${guaranteeText.guaranteeTitle}</h2>
					<p class="m-0">${guaranteeText.guaranteeContent}</p>
					<div class="d-flex gap-2 flex-wrap align-items-center justify-content-center mt-4 badges">
						<figure><img src="${assetsPath}images/gmp.png" alt="Badge"></figure>
						<figure><img src="${assetsPath}images/${fdaBadge}" alt="Badge"></figure>
						<figure><img src="${assetsPath}images/nat.png" alt="Badge"></figure>
						<figure><img src="${assetsPath}images/foreign.png" alt="Badge"></figure>
						<figure><img src="${assetsPath}images/gmo.png" alt="Badge"></figure>
					</div>
				</div>
			</div>
		</div>
		`;
});
