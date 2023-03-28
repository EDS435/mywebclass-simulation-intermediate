import { useEffect } from 'react';

export default function useTOC() {
  useEffect(() => {
    const tocMenu = document.querySelector('#toc_menu');
    if (!tocMenu) return;

    const linksContainer = document.createElement('nav');
    linksContainer.classList.add('anchor-links');

    document.querySelectorAll('main section h1, main section h2, main section h3, main section h4, main section h5, main section h6').forEach((heading) => {
      const level = parseInt(heading.tagName.charAt(1));
      const id = heading.parentElement.id || heading.textContent.replace(/\s/g, '-').toLowerCase();
      const linkText = heading.textContent.length > 15 ? heading.textContent.substring(0, 15) + '...' : heading.textContent;
      const link = document.createElement('a');
      link.textContent = linkText;
      link.href = `#${id}`;
      link.setAttribute('data-target', `#${id}`);
      link.classList.add('nav-link', 'text-truncate');

      const listItem = document.createElement('li');
      listItem.classList.add('nav-item');
      listItem.appendChild(link);

      if (!linksContainer.querySelector(`ul.level-${level}`)) {
        const list = document.createElement('ul');
        list.classList.add('nav', 'nav-pills', 'flex-column', `level-${level}`);
        linksContainer.appendChild(list);
      }

      linksContainer.querySelector(`ul.level-${level}`).appendChild(listItem);
    });

    tocMenu.appendChild(linksContainer);

    const firstNavItem = linksContainer.querySelector('.nav-link:first-of-type');
    if (firstNavItem) {
      firstNavItem.addEventListener('click', (event) => {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    linksContainer.querySelectorAll('.nav-link').forEach((link) => {
      link.setAttribute('tabindex', '0');
    });

    const links = linksContainer.querySelectorAll('a');
    const scrollSpy = () => {
      const fromTop = window.scrollY + 80;
      links.forEach((link) => {
        const section = document.querySelector(link.hash);
        if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    };

    window.addEventListener('scroll', scrollSpy);
    scrollSpy();

    return () => {
      window.removeEventListener('scroll', scrollSpy);
    };
  }, []);
}
