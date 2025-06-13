document.addEventListener("DOMContentLoaded", function () {
  const blogs = [
    {
      title: "Breaking Barriers in Politics",
      date: "February 15, 2021",
      image: "/assets/blog1.avif",
      content: `<p>Dr. Bhadra Bhandari’s journey exemplifies resilience and leadership, shattering barriers in Nepal’s traditionally male-dominated political arena.  <br><br>
      Born into a family entrenched in entrepreneurship in the Karnali region, she embraced business at an early age, managing family ventures and then co-founding a private school during the Maoist conflict—an early indication of her drive and community-mindedness
      english.khabarhub.com. Transitioning from commerce and education into active politics and social activism, Dr. Bhandari navigated entrenched gender biases to emerge as a prominent figure. Now serving as Treasurer of the Nepali Congress in Bagmati Province while holding a doctoral degree, she expertly balances business acumen, academic insight, and grassroots activism . In a country where women still face pervasive obstacles—from cultural norms to electoral challenges—her ascent embodies the shift toward inclusive leadership. By occupying strategic party roles and using her voice for women’s empowerment, Dr. Bhandari helps dismantle systemic barriers, inspiring future generations. Her example underscores a broader transformation in Nepalese politics, one where diverse backgrounds and female leadership are no longer exceptions but foundational strengths. Through breaking molds—be it as a businesswoman, scholar, or activist—Dr. Bhandari is paving the way for more equitable and representative political participation.</p>`,
    },
    {
      title: "Empowering Rural Nepal",
      date: "January 05, 2023",
      image: "/assets/blog2.jpeg",
      content: `<p>Dr. Bhadra Bhandari’s impact goes far beyond city borders, reaching deep into the heart of rural Nepal where development challenges remain most acute. <br><br>
      Recognizing that real change begins at the grassroots, Dr. Bhandari has devoted significant energy to uplifting marginalized communities in remote areas. Her initiatives have ranged from advocating for better access to education and healthcare to promoting women’s entrepreneurship and leadership in villages often left behind by rapid urbanization. As a social activist, she has spearheaded campaigns to ensure that government services actually reach the people who need them most, helping to establish local self-help groups and vocational training centers that give rural women and youth a stronger voice and new economic opportunities. Dr. Bhandari believes empowering rural Nepal means listening to local needs, building infrastructure like clean water and safe schools, and fighting for fair representation in government decision-making. Her hands-on approach—regularly visiting villages, meeting with community leaders, and mentoring young changemakers—demonstrates a deep commitment to inclusive growth. By bridging the gap between policy and practice, Dr. Bhandari is helping rural Nepalis gain the tools and confidence to shape their own futures, making her a true champion for rural empowerment in Nepal.</p>`,
    },
    {
      title: " A Voice at the Global Stage",
      date: "June 23, 2024",
      image: "/assets/blog3.jpg",
      content: `<p>Dr. Bhadra Bhandari’s leadership is not limited to local or national boundaries—she is also making her mark on the global stage.<br><br>
      As a dynamic politician, businesswoman, and social activist from Nepal, Dr. Bhandari has used international platforms to highlight issues that matter to her country, such as women’s rights, sustainable development, and economic empowerment. Through her participation in global forums and conferences, she has shared stories of Nepal’s rural communities and advocated for policy changes that promote gender equality and social justice. Dr. Bhandari has worked to forge partnerships with international organizations and like-minded leaders, bringing back innovative ideas and resources to support development in Nepal. Her eloquence and authenticity resonate with diverse audiences, making her an influential representative of Nepali women and a source of inspiration for aspiring leaders. By raising Nepal’s profile on the world stage, Dr. Bhandari not only amplifies the voices of those who are often unheard but also encourages cross-border collaboration and learning. Her commitment to representing Nepal’s interests globally demonstrates her belief that true progress comes from both local action and international engagement, establishing her as a respected voice and ambassador for her people.</p>`,
    },
    {
      title: "Championing Women's Rights",
      date: "March 12, 2023",
      image: "/assets/img2.jpeg",
      content: `<p>Dr. Bhadra Bhandari’s journey exemplifies resilience and leadership, shattering barriers in Nepal’s traditionally male-dominated political arena.  <br><br>
      Born into a family entrenched in entrepreneurship in the Karnali region, she embraced business at an early age, managing family ventures and then co-founding a private school during the Maoist conflict—an early indication of her drive and community-mindedness
      english.khabarhub.com. Transitioning from commerce and education into active politics and social activism, Dr. Bhandari navigated entrenched gender biases to emerge as a prominent figure. Now serving as Treasurer of the Nepali Congress in Bagmati Province while holding a doctoral degree, she expertly balances business acumen, academic insight, and grassroots activism . In a country where women still face pervasive obstacles—from cultural norms to electoral challenges—her ascent embodies the shift toward inclusive leadership. By occupying strategic party roles and using her voice for women’s empowerment, Dr. Bhandari helps dismantle systemic barriers, inspiring future generations. Her example underscores a broader transformation in Nepalese politics, one where diverse backgrounds and female leadership are no longer exceptions but foundational strengths. Through breaking molds—be it as a businesswoman, scholar, or activist—Dr. Bhandari is paving the way for more equitable and representative political participation.</p>`,
    },
    {
      title: "Empowering Rural Nepal",
      date: "April 18, 2024",
      image: "/assets/img11.jpeg",
      content: `<p>Dr. Bhadra Bhandari’s impact goes far beyond city borders, reaching deep into the heart of rural Nepal where development challenges remain most acute. <br><br>
      Recognizing that real change begins at the grassroots, Dr. Bhandari has devoted significant energy to uplifting marginalized communities in remote areas. Her initiatives have ranged from advocating for better access to education and healthcare to promoting women’s entrepreneurship and leadership in villages often left behind by rapid urbanization. As a social activist, she has spearheaded campaigns to ensure that government services actually reach the people who need them most, helping to establish local self-help groups and vocational training centers that give rural women and youth a stronger voice and new economic opportunities. Dr. Bhandari believes empowering rural Nepal means listening to local needs, building infrastructure like clean water and safe schools, and fighting for fair representation in government decision-making. Her hands-on approach—regularly visiting villages, meeting with community leaders, and mentoring young changemakers—demonstrates a deep commitment to inclusive growth. By bridging the gap between policy and practice, Dr. Bhandari is helping rural Nepalis gain the tools and confidence to shape their own futures, making her a true champion for rural empowerment in Nepal.</p>`,
    },
    {
      title: " A Voice at the Global Stage",
      date: "May 10, 2024",
      image: "/assets/img4.jpeg",
      content: `<p>Dr. Bhadra Bhandari’s leadership is not limited to local or national boundaries—she is also making her mark on the global stage.<br><br>
      As a dynamic politician, businesswoman, and social activist from Nepal, Dr. Bhandari has used international platforms to highlight issues that matter to her country, such as women’s rights, sustainable development, and economic empowerment. Through her participation in global forums and conferences, she has shared stories of Nepal’s rural communities and advocated for policy changes that promote gender equality and social justice. Dr. Bhandari has worked to forge partnerships with international organizations and like-minded leaders, bringing back innovative ideas and resources to support development in Nepal. Her eloquence and authenticity resonate with diverse audiences, making her an influential representative of Nepali women and a source of inspiration for aspiring leaders. By raising Nepal’s profile on the world stage, Dr. Bhandari not only amplifies the voices of those who are often unheard but also encourages cross-border collaboration and learning. Her commitment to representing Nepal’s interests globally demonstrates her belief that true progress comes from both local action and international engagement, establishing her as a respected voice and ambassador for her people.</p>`,
    },
  ];

  window.openBlog = function (index) {
    const blog = blogs[index];
    document.getElementById("blogContent").innerHTML = `
      <img src="${blog.image}" alt="${blog.title}" class="w-full h-56 object-cover object-center mb-6 rounded" />
      <h2 class="text-2xl font-bold mb-2">${blog.title}</h2>
      <p class="text-sm text-gray-500 mb-4">Leave a Comment / <span>${blog.date}</span></p>
      <div class="text-gray-800 text-[16px] leading-relaxed">${blog.content}</div>
    `;
    document.getElementById("blogModal").classList.remove("hidden");
    document.body.classList.add("overflow-hidden");
  };

  window.closeBlog = function () {
    document.getElementById("blogModal").classList.add("hidden");
    document.body.classList.remove("overflow-hidden");
  };

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") window.closeBlog();
  });
});
