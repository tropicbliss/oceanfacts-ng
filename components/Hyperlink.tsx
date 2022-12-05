export default function Hyperlink(props: { text: string; href: string }) {
  return (
    <span>
      &nbsp;
      <a
        class="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
        href={props.href}
        target="_blank"
        rel="noreferrer"
      >
        {props.text}
      </a>
      &nbsp;
    </span>
  );
}
