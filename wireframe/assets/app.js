/* =========================================================================
   AdvisorKhoj Internal CRM — shared shell script (see ../DESIGN.md §11)
   Loaded in <head>: sets theme before paint, then on DOMContentLoaded
   injects the icon sprite, sidebar, top bar, palette and helpers.
   ========================================================================= */
(function () {
  'use strict';

  /* ---- 1. Theme (runs immediately, before first paint) ---- */
  var THEME_KEY = 'ak-theme';
  function getSavedTheme() { try { return localStorage.getItem(THEME_KEY); } catch (e) { return null; } }
  function saveTheme(t) { try { localStorage.setItem(THEME_KEY, t); } catch (e) {} }
  var params = new URLSearchParams(location.search);
  var forced = params.get('theme');               // ?theme=dark for screenshots
  var initial = forced || getSavedTheme();
  if (initial === 'dark' || initial === 'light') document.documentElement.setAttribute('data-theme', initial);
  function currentTheme() {
    var t = document.documentElement.getAttribute('data-theme');
    if (t) return t;
    return window.matchMedia && matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  /* ---- 2. Icon sprite (Lucide-style, 24×24, stroke) ---- */
  var ICONS = {
    'home': '<path d="m3 10 9-7 9 7v10a2 2 0 0 1-2 2h-4v-7H9v7H5a2 2 0 0 1-2-2z"/>',
    'sun': '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
    'calendar': '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
    'inbox': '<path d="M22 12h-6l-2 3h-4l-2-3H2"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/>',
    'inbox-in': '<path d="M22 12h-6l-2 3h-4l-2-3H2"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89"/><path d="M12 2v8M9 7l3 3 3-3"/>',
    'message': '<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22z"/>',
    'mail': '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/>',
    'phone': '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"/>',
    'video': '<path d="m22 8-6 4 6 4V8z"/><rect x="2" y="6" width="14" height="12" rx="2"/>',
    'users': '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/>',
    'user': '<circle cx="12" cy="8" r="4"/><path d="M20 21a8 8 0 0 0-16 0"/>',
    'user-plus': '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M19 8v6M22 11h-6"/>',
    'target': '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
    'check-square': '<path d="m9 11 3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>',
    'briefcase': '<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',
    'life-buoy': '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><path d="m4.9 4.9 4.3 4.3M14.8 14.8l4.3 4.3M14.8 9.2l4.3-4.3M14.8 9.2l3.5-3.5M4.9 19.1l4.3-4.3"/>',
    'file': '<path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5z"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/>',
    'folder': '<path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.7-.9l-.8-1.2A2 2 0 0 0 7.9 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2z"/>',
    'bar-chart': '<path d="M3 3v18h18"/><path d="M18 17V9M13 17V5M8 17v-3"/>',
    'pie': '<path d="M21.2 15.9A10 10 0 1 1 8 2.8"/><path d="M22 12A10 10 0 0 0 12 2v10z"/>',
    'workflow': '<rect x="3" y="3" width="8" height="8" rx="2"/><path d="M7 11v4a2 2 0 0 0 2 2h4"/><rect x="13" y="13" width="8" height="8" rx="2"/>',
    'shield': '<path d="M20 13c0 5-3.5 7.5-7.7 9a1 1 0 0 1-.7 0C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.2-2.7a1.2 1.2 0 0 1 1.6 0C14.5 3.8 17 5 19 5a1 1 0 0 1 1 1z"/>',
    'settings': '<path d="M12.2 2h-.4a2 2 0 0 0-2 2v.2a2 2 0 0 1-1 1.7l-.4.3a2 2 0 0 1-2 0l-.2-.1a2 2 0 0 0-2.7.7l-.2.4a2 2 0 0 0 .7 2.7l.2.1a2 2 0 0 1 1 1.7v.5a2 2 0 0 1-1 1.7l-.2.1a2 2 0 0 0-.7 2.7l.2.4a2 2 0 0 0 2.7.7l.2-.1a2 2 0 0 1 2 0l.4.3a2 2 0 0 1 1 1.7v.2a2 2 0 0 0 2 2h.4a2 2 0 0 0 2-2v-.2a2 2 0 0 1 1-1.7l.4-.3a2 2 0 0 1 2 0l.2.1a2 2 0 0 0 2.7-.7l.2-.4a2 2 0 0 0-.7-2.7l-.2-.1a2 2 0 0 1-1-1.7v-.5a2 2 0 0 1 1-1.7l.2-.1a2 2 0 0 0 .7-2.7l-.2-.4a2 2 0 0 0-2.7-.7l-.2.1a2 2 0 0 1-2 0l-.4-.3a2 2 0 0 1-1-1.7V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/>',
    'search': '<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>',
    'plus': '<path d="M12 5v14M5 12h14"/>',
    'filter': '<path d="M22 3H2l8 9.5V19l4 2v-8.5z"/>',
    'columns': '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M12 3v18"/>',
    'sliders': '<path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6"/>',
    'x': '<path d="M18 6 6 18M6 6l12 12"/>',
    'check': '<path d="M20 6 9 17l-5-5"/>',
    'chevron-down': '<path d="m6 9 6 6 6-6"/>',
    'chevron-up': '<path d="m18 15-6-6-6 6"/>',
    'chevron-right': '<path d="m9 18 6-6-6-6"/>',
    'chevron-left': '<path d="m15 18-6-6 6-6"/>',
    'chevrons-left': '<path d="m11 17-5-5 5-5M18 17l-5-5 5-5"/>',
    'chevrons-right': '<path d="m6 17 5-5-5-5M13 17l5-5-5-5"/>',
    'chevron-up-down': '<path d="m7 15 5 5 5-5M7 9l5-5 5 5"/>',
    'more-h': '<circle cx="5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/>',
    'more-v': '<circle cx="12" cy="5" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="12" cy="19" r="1"/>',
    'edit': '<path d="M12 20h9"/><path d="M16.4 3.6a2.1 2.1 0 1 1 3 3L7 19l-4 1 1-4z"/>',
    'trash': '<path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>',
    'eye': '<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
    'clock': '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
    'alert': '<path d="m21.7 18-8-14a2 2 0 0 0-3.4 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.7-3z"/><path d="M12 9v4M12 17h.01"/>',
    'bell': '<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.9 1.9 0 0 0 3.4 0"/>',
    'moon': '<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9z"/>',
    'play': '<circle cx="12" cy="12" r="10"/><path d="m10 8 6 4-6 4z"/>',
    'sparkles': '<path d="M9.9 15.5A2 2 0 0 0 8.5 14l-6.1-1.6a.5.5 0 0 1 0-1L8.5 9.9A2 2 0 0 0 10 8.5l1.6-6.1a.5.5 0 0 1 1 0L14 8.5A2 2 0 0 0 15.5 10l6.1 1.6a.5.5 0 0 1 0 1L15.5 14a2 2 0 0 0-1.5 1.5l-1.6 6.1a.5.5 0 0 1-1 0z"/><path d="M20 3v4M22 5h-4"/>',
    'star': '<path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z"/>',
    'flag': '<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"/>',
    'paperclip': '<path d="m21.4 11-9.2 9.2a6 6 0 0 1-8.5-8.5l9.2-9.2a4 4 0 0 1 5.7 5.7l-9.2 9.2a2 2 0 0 1-2.8-2.8l8.5-8.5"/>',
    'upload': '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12"/>',
    'download': '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>',
    'link': '<path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7"/>',
    'refresh': '<path d="M3 12a9 9 0 0 1 9-9 9.8 9.8 0 0 1 6.7 2.7L21 8"/><path d="M21 3v5h-5M21 12a9 9 0 0 1-9 9 9.8 9.8 0 0 1-6.7-2.7L3 16"/><path d="M8 16H3v5"/>',
    'arrow-up': '<path d="M12 19V5M5 12l7-7 7 7"/>',
    'arrow-down': '<path d="M12 5v14M19 12l-7 7-7-7"/>',
    'arrow-right': '<path d="M5 12h14M12 5l7 7-7 7"/>',
    'arrow-left': '<path d="M19 12H5M12 19l-7-7 7-7"/>',
    'trending-up': '<path d="m22 7-8.5 8.5-5-5L2 17"/><path d="M16 7h6v6"/>',
    'trending-down': '<path d="m22 17-8.5-8.5-5 5L2 7"/><path d="M16 17h6v-6"/>',
    'rupee': '<path d="M6 3h12M6 8h12M6 13l8.5 8M6 13h3a5 5 0 0 0 0-10"/>',
    'menu': '<path d="M4 6h16M4 12h16M4 18h16"/>',
    'sidebar': '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18"/>',
    'grid': '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/>',
    'list': '<path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/>',
    'kanban': '<path d="M6 5v11M12 5v6M18 5v14"/>',
    'map-pin': '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/>',
    'gift': '<rect x="3" y="8" width="18" height="4" rx="1"/><path d="M12 8v13M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7M7.5 8a2.5 2.5 0 0 1 0-5C11 3 12 8 12 8s1-5 4.5-5a2.5 2.5 0 0 1 0 5"/>',
    'send': '<path d="m22 2-7 20-4-9-9-4z"/><path d="M22 2 11 13"/>',
    'smile': '<circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01"/>',
    'mic': '<rect x="9" y="2" width="6" height="12" rx="3"/><path d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v3"/>',
    'lock': '<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
    'log-out': '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"/>',
    'command': '<path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"/>',
    'zap': '<path d="M13 2 3 14h9l-1 8 10-12h-9z"/>',
    'at': '<circle cx="12" cy="12" r="4"/><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8"/>',
    'hash': '<path d="M4 9h16M4 15h16M10 3 8 21M16 3l-2 18"/>',
    'copy': '<rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>',
    'external': '<path d="M15 3h6v6M10 14 21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>',
    'info': '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/>',
    'help': '<circle cx="12" cy="12" r="10"/><path d="M9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3M12 17h.01"/>',
    'qr': '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><path d="M14 14h3v3h-3zM20 14v.01M14 20h.01M17 17h3v3M20 20v.01"/>',
    'globe': '<circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>',
    'building': '<rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4M8 6h.01M16 6h.01M12 6h.01M12 10h.01M12 14h.01M16 10h.01M16 14h.01M8 10h.01M8 14h.01"/>',
    'tag': '<path d="M12.6 2.6A2 2 0 0 0 11.2 2H4a2 2 0 0 0-2 2v7.2a2 2 0 0 0 .6 1.4l8.7 8.7a2.4 2.4 0 0 0 3.4 0l6.6-6.6a2.4 2.4 0 0 0 0-3.4z"/><circle cx="7.5" cy="7.5" r=".5"/>',
    'layers': '<path d="m12 2 10 5-10 5L2 7z"/><path d="m2 17 10 5 10-5M2 12l10 5 10-5"/>',
    'repeat': '<path d="m17 2 4 4-4 4"/><path d="M3 11v-1a4 4 0 0 1 4-4h14M7 22l-4-4 4-4"/><path d="M21 13v1a4 4 0 0 1-4 4H3"/>',
    'pause': '<rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/>',
    'archive': '<rect x="2" y="3" width="20" height="5" rx="1"/><path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8M10 12h4"/>',
    'grip': '<circle cx="9" cy="5" r="1"/><circle cx="9" cy="12" r="1"/><circle cx="9" cy="19" r="1"/><circle cx="15" cy="5" r="1"/><circle cx="15" cy="12" r="1"/><circle cx="15" cy="19" r="1"/>',
    'image': '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.1-3.1a2 2 0 0 0-2.8 0L6 21"/>',
    'whatsapp': '<path d="M3 21l1.65-3.8A9 9 0 1 1 7.6 20z"/><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"/>',
    'cake': '<path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1M2 21h20M7 8v3M12 8v3M17 8v3M7 4h.01M12 4h.01M17 4h.01"/>',
    'activity': '<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>',
    'key': '<circle cx="7.5" cy="15.5" r="5.5"/><path d="m21 2-9.6 9.6M15.5 7.5l3 3L22 7l-3-3"/>',
    'undo': '<path d="M3 7v6h6"/><path d="M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13"/>',
    'note': '<path d="M15.5 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5z"/><path d="M15 3v6h6"/>',
  };
  function buildSprite() {
    var s = '<svg xmlns="http://www.w3.org/2000/svg" style="position:absolute;width:0;height:0;overflow:hidden" aria-hidden="true">';
    for (var k in ICONS) s += '<symbol id="i-' + k + '" viewBox="0 0 24 24">' + ICONS[k] + '</symbol>';
    return s + '</svg>';
  }
  function ic(name, cls) { return '<svg class="i' + (cls ? ' ' + cls : '') + '" aria-hidden="true"><use href="#i-' + name + '"/></svg>'; }

  /* ---- 3. Navigation model ---- */
  var NAV = [
    { label: 'Work', items: [
      { id: 'home', text: 'Home', icon: 'home', href: '01-dashboard.html' },
      { id: 'my-day', text: 'My Day', icon: 'sun', href: '02-my-day.html', count: '9' },
      { id: 'activity', text: 'Team Activity', icon: 'activity', href: '18-team-activity.html' },
      { id: 'calendar', text: 'Calendar', icon: 'calendar', href: '03-calendar.html' },
      { id: 'inbox', text: 'Inbox', icon: 'inbox', href: '15-inbox-whatsapp.html', count: '4' },
    ]},
    { label: 'CRM', items: [
      { id: 'leads', text: 'Leads', icon: 'user-plus', href: '04-leads-list.html' },
      { id: 'clients', text: 'Clients', icon: 'users', href: '07-clients-list.html' },
      { id: 'opportunities', text: 'Opportunities', icon: 'target', href: '12-opportunities.html' },
      { id: 'campaigns', text: 'Campaigns', icon: 'send', href: '22-campaigns.html' },
      { id: 'tasks', text: 'Tasks', icon: 'check-square', href: '09-tasks-list.html', count: '3', danger: true },
      { id: 'meetings', text: 'Meetings', icon: 'video', href: '13-meetings.html' },
      { id: 'service', text: 'Service Requests', icon: 'life-buoy', href: '16-service-requests.html', count: '3' },
    ]},
    { label: 'Library', items: [
      { id: 'documents', text: 'Documents', icon: 'folder', href: '17-documents.html' },
      { id: 'commissions', text: 'Commissions', icon: 'rupee', href: '21-commissions.html' },
      { id: 'reports', text: 'Reports & MIS', icon: 'bar-chart', href: '19-reports.html' },
    ]},
    { label: 'Admin', items: [
      { id: 'team', text: 'Team & Hierarchy', icon: 'shield', href: '20-settings.html#team' },
      { id: 'workflows', text: 'Automations', icon: 'workflow', href: '20-settings.html#automations' },
      { id: 'settings', text: 'Settings', icon: 'settings', href: '20-settings.html' },
    ]},
  ];

  function renderSidebar(el, active) {
    var h = '<div class="sb-brand"><div class="sb-logo">SW</div><div style="min-width:0"><div class="sb-name">Sharma Wealth</div><div class="sb-ws">CRM · MF Box</div></div></div><nav class="sb-nav" aria-label="Main">';
    NAV.forEach(function (g) {
      h += '<div class="sb-group"><div class="sb-label">' + g.label + '</div>';
      g.items.forEach(function (it) {
        var on = it.id === active;
        h += '<a class="sb-item' + (on ? ' is-active' : '') + '" href="' + it.href + '"' + (on ? ' aria-current="page"' : '') + ' title="' + it.text + '">' + ic(it.icon) + '<span>' + it.text + '</span>' +
          (it.count ? '<em class="sb-count' + (it.danger ? ' is-danger' : '') + '" style="font-style:normal">' + it.count + '</em>' : '') + '</a>';
      });
      h += '</div>';
    });
    h += '</nav><div class="sb-foot"><span class="avatar">NK</span><div class="sb-user"><div class="sb-user-name">Neha Kapoor</div><div class="sb-user-role">Branch Manager · Andheri</div></div>' +
      '<button class="btn btn-ghost btn-icon btn-sm" data-ak="collapse" title="Collapse sidebar">' + ic('chevrons-left') + '</button></div>';
    el.innerHTML = h;
  }

  function renderTopbar(el, crumb) {
    var parts = (crumb || '').split('|').filter(Boolean);
    var cr = parts.map(function (p, i) {
      return i === parts.length - 1 ? '<span class="crumb-current">' + p + '</span>' : '<span>' + p + '</span>' + ic('chevron-right');
    }).join('');
    var dark = currentTheme() === 'dark';
    el.innerHTML =
      '<button class="btn btn-ghost btn-icon" data-ak="sidebar" title="Toggle sidebar">' + ic('sidebar') + '</button>' +
      '<div class="crumbs">' + cr + '</div>' +
      '<div class="tb-search" data-ak="palette" role="button" tabindex="0" aria-label="Search">' + ic('search') + '<span class="tb-search-text">Search clients, PAN, mobile, folio…</span><span class="kbd">Ctrl K</span></div>' +
      '<div class="tb-actions">' +
        '<button class="btn btn-secondary btn-sm tb-hide-sm" data-ak="quickadd">' + ic('plus') + 'New</button>' +
        '<button class="btn btn-ghost btn-sm tb-hide-sm" data-ak="tutorial" title="Watch a 60-second tutorial for this page">' + ic('play') + 'Tutorial</button>' +
        '<span class="tb-sep tb-hide-sm"></span>' +
        '<div class="popover-wrap"><button class="btn btn-ghost btn-icon" data-ak="notif" title="Notifications">' + ic('bell') + '<span class="notif-dot">8</span></button>' +
          '<div class="popover" id="ak-notif">' + notifPanel() + '</div></div>' +
        '<button class="btn btn-ghost btn-icon" data-ak="theme" title="Switch theme">' + ic(dark ? 'sun' : 'moon') + '</button>' +
        '<button class="btn btn-ghost btn-icon" title="Neha Kapoor" style="width:auto;padding:0 2px"><span class="avatar avatar-sm" style="width:28px;height:28px">NK</span></button>' +
      '</div>';
  }

  function notifPanel() {
    var items = [
      ['danger', 'clock', '<b>KYC update – Suresh Iyer</b> is overdue by 2 days', '10 min ago', true],
      ['primary', 'at', '<b>Vikram Rao</b> mentioned you on <b>SIP top-up – Suresh Iyer</b>', '42 min ago', true],
      ['ai', 'sparkles', '<b>3 new AI opportunities</b> identified for your clients', '1 h ago', true],
      ['warning', 'video', 'Log the outcome of <b>Portfolio review – Verma Family</b>', '2 h ago', false],
      ['success', 'user-plus', 'New website lead <b>Sameer Khan</b> was assigned to you', 'Yesterday', false],
    ];
    var h = '<div class="menu notif-panel"><div class="row" style="padding:8px 10px"><b style="font-size:14px">Notifications</b><a class="ml-auto text-sm" href="#">Mark all read</a></div><div class="menu-sep"></div>';
    items.forEach(function (n) {
      h += '<div class="notif-item' + (n[4] ? ' is-unread' : '') + '"><span class="tl-dot is-' + n[0] + '">' + ic(n[1]) + '</span><div><div class="tl-text">' + n[2] + '</div><div class="tl-meta">' + n[3] + '</div></div></div>';
    });
    return h + '<div class="menu-sep"></div><a class="menu-item" href="02-my-day.html" style="justify-content:center;color:var(--primary-text)">Open My Day</a></div>';
  }

  /* ---- 4. Command palette ---- */
  var PALETTE = [
    ['Jump to', 'users', 'Rahul Verma', 'Client · Verma Family · ABCPV••••K', '08-client-360.html'],
    ['Jump to', 'users', 'Suresh Iyer', 'Client · ₹86.5 L AUM', '08-client-360.html'],
    ['Jump to', 'user-plus', 'Karan Malhotra', 'Lead · Hot · MF-SIP', '05-lead-create.html'],
    ['Actions', 'check-square', 'Create task', 'c then t', '10-task-create.html'],
    ['Actions', 'video', 'Schedule meeting', 'c then m', '13-meetings.html'],
    ['Actions', 'note', 'Log meeting outcome', '', '14-meeting-detail.html'],
    ['Actions', 'user-plus', 'Add lead', 'c then l', '05-lead-create.html'],
    ['Go to', 'sun', 'My Day', 'g then d', '02-my-day.html'],
    ['Go to', 'target', 'Opportunities', 'g then o', '12-opportunities.html'],
    ['Go to', 'activity', 'Team Activity', 'g then a', '18-team-activity.html'],
    ['Go to', 'bar-chart', 'Reports & MIS', 'g then r', '19-reports.html'],
  ];
  function renderPalette() {
    var wrap = document.createElement('div');
    var h = '<div class="backdrop" id="ak-pal-bd"></div><div class="palette" id="ak-pal" role="dialog" aria-label="Command palette">' +
      '<div class="palette-input">' + ic('search', 'i-lg') + '<input id="ak-pal-q" placeholder="Search clients, leads, PAN, mobile, folio or type a command…"><span class="kbd">Esc</span></div><div class="palette-list" id="ak-pal-list">';
    var last = '';
    PALETTE.forEach(function (p, i) {
      if (p[0] !== last) { h += '<div class="menu-label">' + p[0] + '</div>'; last = p[0]; }
      h += '<a class="menu-item' + (i === 0 ? ' is-active' : '') + '" href="' + p[4] + '" data-q="' + (p[2] + ' ' + p[3]).toLowerCase() + '">' + ic(p[1]) + '<span>' + p[2] + '</span><span class="menu-hint">' + p[3] + '</span></a>';
    });
    h += '</div><div class="palette-foot"><span><span class="kbd">↑</span><span class="kbd">↓</span> navigate</span><span><span class="kbd">↵</span> open</span><span><span class="kbd">?</span> all shortcuts</span><span class="ml-auto">Try “call Rahul kal 4pm”</span></div></div>';
    wrap.innerHTML = h;
    while (wrap.firstChild) document.body.appendChild(wrap.firstChild);
    var q = document.getElementById('ak-pal-q');
    q.addEventListener('input', function () {
      var v = q.value.toLowerCase();
      document.querySelectorAll('#ak-pal-list .menu-item').forEach(function (a) { a.style.display = a.getAttribute('data-q').indexOf(v) > -1 ? '' : 'none'; });
    });
    document.getElementById('ak-pal-bd').addEventListener('click', closePalette);
  }
  function openPalette() { var p = document.getElementById('ak-pal'); if (!p) return; p.classList.add('is-open'); document.getElementById('ak-pal-bd').classList.add('is-open'); setTimeout(function () { document.getElementById('ak-pal-q').focus(); }, 10); }
  function closePalette() { var p = document.getElementById('ak-pal'); if (!p) return; p.classList.remove('is-open'); document.getElementById('ak-pal-bd').classList.remove('is-open'); }

  /* ---- 5. Public helpers ---- */
  var AK = window.AK = {
    icon: ic,
    toast: function (msg, opts) {
      opts = opts || {};
      var stack = document.querySelector('.toast-stack');
      if (!stack) { stack = document.createElement('div'); stack.className = 'toast-stack'; document.body.appendChild(stack); }
      var t = document.createElement('div'); t.className = 'toast';
      t.innerHTML = ic(opts.icon || 'check') + '<span>' + msg + '</span>' + (opts.undo === false ? '' : '<button class="btn btn-sm ml-auto">Undo</button>');
      stack.appendChild(t);
      var ub = t.querySelector('.btn');
      if (ub) ub.addEventListener('click', function () { if (typeof opts.onUndo === 'function') opts.onUndo(); t.remove(); });
      setTimeout(function () { t.remove(); }, opts.ms || 4000);
      return t;
    },
    shortcuts: function () {
      var m = document.getElementById('ak-keys');
      if (!m) {
        var rows = [['Ctrl K', 'Command palette / search'], ['/', 'Search'], ['c', 'Create (task, lead, meeting)'], ['g then d', 'Go to My Day'], ['g then t', 'Go to Tasks'], ['e', 'Mark done'], ['h', 'Snooze'], ['Esc', 'Close drawer or menu'], ['?', 'Show this list']];
        var h = '<div class="backdrop" id="ak-keys-bd"></div><div class="modal" id="ak-keys" role="dialog" aria-label="Keyboard shortcuts"><div class="modal-header"><h2>Keyboard shortcuts</h2></div><div class="modal-body"><div class="kv" style="grid-template-columns:120px 1fr">';
        rows.forEach(function (r) { h += '<dt>' + r[0].split(' ').map(function (k) { return k === 'then' ? '<span class="faint text-sm">then</span>' : '<span class="kbd">' + k + '</span>'; }).join(' ') + '</dt><dd>' + r[1] + '</dd>'; });
        h += '</div></div><div class="modal-footer"><button class="btn btn-secondary" data-ak="keys-close">Close</button></div></div>';
        document.body.insertAdjacentHTML('beforeend', h);
        m = document.getElementById('ak-keys');
        document.getElementById('ak-keys-bd').addEventListener('click', AK.closeShortcuts);
      }
      m.classList.add('is-open'); document.getElementById('ak-keys-bd').classList.add('is-open');
    },
    closeShortcuts: function () {
      var m = document.getElementById('ak-keys'); if (m) { m.classList.remove('is-open'); document.getElementById('ak-keys-bd').classList.remove('is-open'); }
    },
    openDrawer: function (id) {
      var d = document.getElementById(id); if (!d) return;
      var bd = document.getElementById(id + '-bd');
      if (!bd) { bd = document.createElement('div'); bd.className = 'backdrop'; bd.id = id + '-bd'; d.parentNode.insertBefore(bd, d); bd.addEventListener('click', function () { AK.closeDrawer(id); }); }
      d.classList.add('is-open'); bd.classList.add('is-open');
    },
    closeDrawer: function (id) {
      var d = document.getElementById(id); if (d) d.classList.remove('is-open');
      var bd = document.getElementById(id + '-bd'); if (bd) bd.classList.remove('is-open');
    },
    setTheme: function (t) {
      document.documentElement.setAttribute('data-theme', t); saveTheme(t);
      var b = document.querySelector('[data-ak="theme"]'); if (b) b.innerHTML = ic(t === 'dark' ? 'sun' : 'moon');
    },
    openPalette: openPalette, closePalette: closePalette,
  };

  /* ---- 6. Boot ---- */
  function boot() {
    document.body.insertAdjacentHTML('afterbegin', buildSprite());
    var page = document.body.getAttribute('data-page') || '';
    var sb = document.getElementById('sidebar'); if (sb) renderSidebar(sb, page);
    var tb = document.getElementById('topbar'); if (tb) renderTopbar(tb, document.body.getAttribute('data-crumb'));
    if (sb || tb) renderPalette();
    var app = document.querySelector('.app');
    try { if (app && localStorage.getItem('ak-sb') === 'collapsed' && window.innerWidth > 1024) app.classList.add('sb-collapsed'); } catch (e) {}

    // Open a drawer straight away when the URL asks for it (?open=drawer-id) or the body says so.
    var openId = params.get('open') || document.body.getAttribute('data-open');
    if (openId) setTimeout(function () { AK.openDrawer(openId); }, 30);

    document.addEventListener('click', function (e) {
      var t = e.target.closest('[data-ak]');
      if (t) {
        var a = t.getAttribute('data-ak');
        if (a === 'theme') { AK.setTheme(currentTheme() === 'dark' ? 'light' : 'dark'); }
        else if (a === 'sidebar' || a === 'collapse') {
          if (window.innerWidth <= 768) app.classList.toggle('sb-mobile-open');
          else if (window.innerWidth <= 1024) app.classList.toggle('sb-expanded');
          else { app.classList.toggle('sb-collapsed'); try { localStorage.setItem('ak-sb', app.classList.contains('sb-collapsed') ? 'collapsed' : 'open'); } catch (err) {} }
        }
        else if (a === 'palette' || a === 'quickadd') { openPalette(); }
        else if (a === 'notif') { document.getElementById('ak-notif').classList.toggle('is-open'); e.stopPropagation(); return; }
        else if (a === 'keys-close') { AK.closeShortcuts(); }
        else if (a === 'tutorial') { AK.toast('Tutorial: a 60-second video for this page opens here', { icon: 'play', undo: false }); }
      }
      var od = e.target.closest('[data-open-drawer]');
      if (od) { e.preventDefault(); AK.openDrawer(od.getAttribute('data-open-drawer')); }
      var cd = e.target.closest('[data-close-drawer]');
      if (cd) { var d = cd.closest('.drawer'); if (d) AK.closeDrawer(d.id); }
      var tab = e.target.closest('[data-tabs] .tab');
      if (tab) {
        var group = tab.closest('[data-tabs]');
        if (tab.tagName === 'A' && tab.getAttribute('href') && tab.getAttribute('href').charAt(0) !== '#') return;
        e.preventDefault();
        group.querySelectorAll('.tab').forEach(function (x) { x.classList.toggle('is-active', x === tab); });
        var target = tab.getAttribute('data-tab');
        var scope = group.getAttribute('data-tabs');
        if (target) document.querySelectorAll('[data-tab-panel][data-tab-scope="' + scope + '"]').forEach(function (p) { p.classList.toggle('is-active', p.getAttribute('data-tab-panel') === target); });
      }
      var seg = e.target.closest('[data-segmented] button');
      if (seg) { seg.parentNode.querySelectorAll('button').forEach(function (b) { b.setAttribute('aria-pressed', b === seg ? 'true' : 'false'); }); }
      var ch = e.target.closest('.choice-group[data-single] .choice');
      if (ch) { ch.parentNode.querySelectorAll('.choice').forEach(function (b) { b.setAttribute('aria-pressed', b === ch ? 'true' : 'false'); }); }
      var pt = e.target.closest('[data-popover]');
      if (pt) { var pop = document.getElementById(pt.getAttribute('data-popover')); if (pop) { pop.classList.toggle('is-open'); e.stopPropagation(); return; } }
      if (!e.target.closest('.popover')) document.querySelectorAll('.popover.is-open').forEach(function (p) { p.classList.remove('is-open'); });
    });

    document.addEventListener('keydown', function (e) {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); openPalette(); }
      if (e.key === 'Escape') { closePalette(); document.querySelectorAll('.drawer.is-open').forEach(function (d) { AK.closeDrawer(d.id); }); document.querySelectorAll('.popover.is-open').forEach(function (p) { p.classList.remove('is-open'); }); }
      var typing = /INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName) || document.activeElement.isContentEditable;
      if (!typing && e.key === '/') { e.preventDefault(); openPalette(); }
      if (!typing && e.key === '?') { e.preventDefault(); AK.shortcuts(); }
      if (e.key === 'Escape') AK.closeShortcuts();
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
})();
