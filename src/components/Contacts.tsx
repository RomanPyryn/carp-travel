import ContactsForm from './ContactsForm';

export default function Contacts() {
  return (
    <section id="contacts contacts-join" className="contacts section">
      <div className="container">
        <h2 className="section-title mb-9 xl:mb-20">
          <span className="font-thin">Contact</span> us
        </h2>
        <div className="xl:grid xl:grid-cols-2 xl:gap-[260px]">
          <div className="smOnly:space-y-6 mdOnly:grid mdOnly:grid-cols-2 mdOnly:mb-16 xl:flex xl:flex-col justify-between">
            <div className="space-y-6 xl:space-y-16  xl:mb-32">
              <div className="contacts-block justify-end">
                <div className="">
                  <a href="tel:+380981234567" className="contacts-link">
                    +38 (098) 12 34 567
                  </a>
                  <a href="tel:+380731234567" className="contacts-link">
                    +38 (073) 12 34 567
                  </a>
                </div>
                <p className="contacts-label">Phone number</p>
              </div>
              <div className="contacts-block justify-end">
                <div className="">
                  <a href="mailto:support@carptravel.com" className="contacts-link">
                    support@carptravel.com
                  </a>
                </div>
                <p className="contacts-label">E-mail</p>
              </div>
            </div>
            <div className="contacts-block flex-row-reverse justify-start  md:justify-end xl:flex-row xl:self-end">
              <div className="w-[100px]">
                <a
                  href={'facebook.com'}
                  className="contacts-link"
                  rel="noopener noreferrer nofollow"
                  target="_blank"
                >
                  facebook
                </a>
                <a
                  href={'https://www.instagram.com/'}
                  className="contacts-link"
                  rel="noopener noreferrer nofollow"
                  target="_blank"
                >
                  instagram
                </a>
                <a
                  href={'https://www.youtube.com'}
                  className="contacts-link"
                  rel="noopener noreferrer nofollow"
                  target="_blank"
                >
                  youtube
                </a>
                <a
                  href={'https://www.tiktok.com/'}
                  className="contacts-link"
                  rel="noopener noreferrer nofollow"
                  target="_blank"
                >
                  tiktok
                </a>
              </div>
              <p className="contacts-label text-end xl:text-start">Follow us</p>
            </div>
          </div>
          <ContactsForm />
        </div>
      </div>
    </section>
  );
}
