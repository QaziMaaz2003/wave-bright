import { Button } from '../components/ui/Button';

export default function NotFound() {
  return (
    <div className="wb-notfound">
      <img className="wb-notfound__mark" src="/brand/logo-mark.png" alt="" width={323} height={510} />
      <span className="wb-eyebrow" style={{ justifySelf: 'center' }}>
        Error 404
      </span>
      <h1>No signal.</h1>
      <p style={{ color: 'var(--wb-color-muted)' }}>We couldn&rsquo;t find the page you were looking for.</p>
      <div className="wb-btns">
        <Button to="/">Back to home</Button>
        <Button to="/contact" variant="ghost">
          Contact us
        </Button>
      </div>
    </div>
  );
}
