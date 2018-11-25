walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
            if(node.parentElement.tagName.toLowerCase() != "script") {
                handleText(node);
            }
			break;
	}
}

function handleText(textNode) {
	var v = textNode.nodeValue;

  // Deal with the easy case
  v = v.replace(/\b(T|t)he (C|c)loud/g, function(match, p1, p2, offset, string) {
    // t - 7 = m
    // c - 1 = b
    m = String.fromCharCode(p1.charCodeAt(0) - 7);
    b = String.fromCharCode(p2.charCodeAt(0) - 1);
    return m + "y " + b + "utt";
  });

  // Deal with private clouds
  v = v.replace(/\b(P|p)rivate (C|c)loud/g, function(match, p1, p2, offset, string) {
    // c - 1 = b
    b = String.fromCharCode(p2.charCodeAt(0) - 1);
    return p1 + "rivate " + b + "utt";
  });

  // Get the corner cases
  if(v.match(/cloud/i)) {
    // If we're not talking about weather
    if(v.match(/PaaS|SaaS|IaaS|computing|data|storage|cluster|distributed|server|hosting|provider|grid|enterprise|provision|apps|hardware|software|/i)) {
      v = v.replace(/(C|c)loud/gi, function(match, p1, offset, string) {
        // c - 1 = b
        b = String.fromCharCode(p1.charCodeAt(0) - 1);
        return b + "utt";
      });
    }
  }

  // Add Blockchain to the mix
  v = v.replace(/\b(B|b)lock(| |-)(C|c)hain/g, function(match, p1, p2, p3, offset, string) {
    return p1 + "utt" + p2 + p3 + "hain";
  });

  // Add Cisco to the mix
  v = v.replace(/\b(C|c)isco/g, function(match, p1, offset, string) {
    return p1 + "ysco";
  });

  // Add SDN to the mix
  v = v.replace(/\b(S|s)DN/g, function(match, p1, offset, string) {
    // s - 18 = a
    a = String.fromCharCode(p1.charCodeAt(0) - 18);
    return a + "SS";
  });

  // Add SD-WAN to the mix
  v = v.replace(/\b(S|s)D-WAN/g, function(match, p1, offset, string) {
    // s - 6 = m
    m = String.fromCharCode(p1.charCodeAt(0) - 6);
    return m + "Y-ASS";
  });

  // Add OpenFlow to the mix
  v = v.replace(/\b(O|o)pen(F|f)low/g, function(match, p1, p2, offset, string) {
    // f - 5 = a
    a = String.fromCharCode(p2.charCodeAt(0) - 5);
    return "Open" + a + "ss";
  });

    // Add OpenStack to the mix
    v = v.replace(/\b(O|o)pen(S|s)tack/g, function(match, p1, p2, offset, string) {
      // s - 17 = b
      b = String.fromCharCode(p2.charCodeAt(0) - 17);
      return "Open" + b + "uttocks";
    });

  // Add Hyperconverged to the mix
  v = v.replace(/\b(H|h)yper(| |-)(C|c)onverge(d|nce)/g, function(match, p1, p2, p3, p4, offset, string) {
    // c - 1 = b
    b = String.fromCharCode(p3.charCodeAt(0) - 1);
    return "Hyper" + p2 + b + "uttifie" + p4;
  });

    // Add Nutanix to the mix
    v = v.replace(/\b(N|n)utanix/g, function(match, p1, offset, string) {
      // n - 12 = b
      b = String.fromCharCode(p1.charCodeAt(0) - 12);
      return b + "uttanix";
    });

     // Add Azure to the mix
     v = v.replace(/\b(A|a)zure/g, function(match, p1, offset, string) {
      return p1 + "ssure";
    });

  // Add Software-defined to the mix
  v = v.replace(/\b(S|s)oftware(| |-)(D|d)efined/g, function(match, p1, p2, p3, offset, string) {
    // s - 17 = b
    // d - 3 = a
    b = String.fromCharCode(p1.charCodeAt(0) - 17);
    a = String.fromCharCode(p3.charCodeAt(0) - 3);
    return b + "uttware" + p2 + a + "ssified";
  });

// Add Internet of things to the mix
v = v.replace(/\b(I|i)nternet (O|o)f (T|t)hings/g, function(match, p1, p2, p3, offset, string) {
  return p1 + "nternet " + p2 + "f " + p3 + "iny butts";
});

	textNode.nodeValue = v;
}

