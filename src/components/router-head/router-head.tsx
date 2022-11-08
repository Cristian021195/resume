import { component$ } from '@builder.io/qwik';
import { useDocumentHead, useLocation } from '@builder.io/qwik-city';

/**
 * The RouterHead component is placed inside of the document `<head>` element.
 */
export const RouterHead = component$(() => {
  const head = useDocumentHead();
  const loc = useLocation();

  return (
    <>
      <title>{head.title}</title>

      <link rel="canonical" href={loc.href} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet"/>

      <meta name="application-name" content="Lista Compras"/>
      <meta name="apple-mobile-web-app-capable" content="yes"/>
      <meta name="apple-mobile-web-app-status-bar-style" content="default"/>
      <meta name="apple-mobile-web-app-title" content="Lista Compras"/>
      <meta name="description" content="App para hacer las compras"/>
      <meta name="format-detection" content="telephone=no"/>
      <meta name="mobile-web-app-capable" content="yes"/>
      <meta name="x5-page-mode" content="app"/>
      <meta name="browsermode" content="application"/>
      <meta name="msapplication-TileColor" content="#1E90FF"/>
      <meta name="msapplication-tap-highlight" content="no"/>
      <meta name="theme-color" content="#1E90FF"/>
      <link rel="apple-touch-icon" type="image/svg+xml" href="/favicon.svg"/>
      <link rel="icon" href="/favicon.svg" sizes="any" type="image/svg+xml"/>
      <link rel="mask-icon" href="/favicon.svg" sizes="any" type="image/svg+xml" color="#1E90FF"/>

      {head.meta.map((m) => (
        <meta {...m} />
      ))}

      {head.links.map((l) => (
        <link {...l} />
      ))}

      {head.styles.map((s) => (
        <style {...s.props} dangerouslySetInnerHTML={s.style} />
      ))}
    </>
  );
});
