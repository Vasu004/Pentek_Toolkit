import subprocess
import shlex

def dnsenumeration(domain):
    print(f"\n[+] Running DNS Enumeration on {domain} (dnsenum skipped)...\n")
    results = []

    try:
        # Run a basic dig query
        dig = subprocess.run(shlex.split(f'dig +short {domain}'), capture_output=True, text=True)
        if dig.stdout:
            results.append("[DIG +short output]")
            results.extend(dig.stdout.strip().split('\n'))
        
        # Run nslookup as fallback
        nslookup = subprocess.run(shlex.split(f'nslookup {domain}'), capture_output=True, text=True)
        if nslookup.stdout:
            results.append("\n[NSLOOKUP output]")
            results.extend(nslookup.stdout.strip().split('\n'))

    except Exception as e:
        results.append(f"[ERROR] DNS Enumeration failed: {e}")

    return results
