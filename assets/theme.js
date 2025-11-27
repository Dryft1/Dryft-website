(function() {
  const drawerToggle = document.querySelector('.header__drawer-toggle');
  const drawer = document.getElementById('MobileDrawer');
  const drawerClose = drawer ? drawer.querySelector('.mobile-drawer__close') : null;

  function setDrawer(open) {
    if (!drawer) return;
    drawer.hidden = !open;
    drawerToggle?.setAttribute('aria-expanded', open ? 'true' : 'false');
    document.body.classList.toggle('drawer-open', open);
  }

  drawerToggle?.addEventListener('click', () => setDrawer(drawer.hidden));
  drawerClose?.addEventListener('click', () => setDrawer(false));

  document.addEventListener('keyup', (event) => {
    if (event.key === 'Escape') {
      setDrawer(false);
    }
  });
})();
